'use client'
import { useState } from 'react'
import Person from './Person'
import classNames from '@/utils/classnames'

const persons = [
  {
    image: '/simon2.jpeg',
    title: 'Full Stack Developer',
    name: 'Simon Gribert',
  },
  {
    image: '/michael.jpeg',
    title: 'Sr. Industry Salesman',
    name: 'Michael Gribert',
  },
  {
    image: '/jakob.jpg',
    title: 'Jr. Supply Planner',
    name: 'Jakob Gribert',
  },
]

const Carousel = () => {
  const [currentPos, setCurrentPos] = useState(0)

  return (
    <section className="h-full w-full max-w-4xl flex flex-col justify-center">
      <div className="w-full flex justify-center md:justify-between">
        {persons.map((person, i) => (
          <div
            key={i}
            className={classNames(
              i === currentPos ? 'block' : 'hidden md:block',
            )}
          >
            <Person {...person} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        {persons.map((_, i) => (
          <div
            onClick={() => {
                setCurrentPos(i)
            }}
            className={classNames(
              i === currentPos ? 'bg-white' : 'bg-gray-400',
              'w-4 h-4 mx-1 rounded-sm cursor-pointer flex justify-center items-center',
            )}
            key={i}
          >
            <div
              className={classNames(
                i === currentPos ? 'bg-black' : 'bg-gay-400',
                'w-3 h-3 rounded-sm',
              )}
            ></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Carousel
