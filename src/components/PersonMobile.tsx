'use client'
import { motion, useAnimation } from 'framer-motion'
import Person, { IPersonProps } from './Person'
import { useEffect, useRef } from 'react'
import classNames from '@/utils/classNames'

const swipeVariant = {
  exit: (direction: number) => {
    return {
      x: direction < 0 ? '50%' : '-150%',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }
  },
  center: (direction: number) => {
    return {
      x: direction < 0 ? '-150%' : '50%',
      transition: {
        duration: 0,
      },
    }
  },
  enter: {
    x: '-50%',
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
}

interface IPersonMobile {
  person: IPersonProps
  currentIndex: number
  index: number
  direction: number
}

const PersonMobile = ({
  person,
  index,
  currentIndex,
  direction,
}: IPersonMobile) => {
  const swipe = useAnimation()

  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (currentIndex !== index) {
      swipe.start('exit')
    } else {
      swipe.start('center').then(() => {
        swipe.start('enter')
      })
    }
  }, [currentIndex, index, swipe])

  return (
    <motion.div
      className={classNames(
        index === 0 ? 'relative' : 'absolute',
        'top-1/2 left-1/2',
      )}
      animate={swipe}
      variants={swipeVariant}
      custom={direction}
      initial={{
        opacity: index === currentIndex ? 1 : 0,
        x: '-50%',
        y: '-50%',
      }}
    >
      <Person {...person} />
    </motion.div>
  )
}

export default PersonMobile
