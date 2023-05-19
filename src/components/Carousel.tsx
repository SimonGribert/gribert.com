'use client'
import React, { useState } from 'react'
import Person from './Person'
import classNames from '@/utils/classNames'
import { wrap } from 'popmotion'
import PersonMobile from './PersonMobile'

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
    image: '/jakob2.jpg',
    title: 'Jr. Supply Planner',
    name: 'Jakob Gribert',
  },
]

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const personIndex = wrap(0, persons.length, page)

  const paginate = (i: number) => {
    const newDirection =
      personIndex === 0 && i === 2
        ? -1
        : personIndex === 2 && i === 0
        ? 1
        : i > personIndex
        ? 1
        : -1

    setPage([page + newDirection, newDirection])
  }

  return (
    <section className="h-full w-full max-w-4xl flex flex-col justify-center">
      <div className="w-full relative flex justify-center md:justify-between md:items-center">
        {persons.map((person, i) => (
          <React.Fragment key={i}>
            <div className="hidden md:block">
              <Person {...person} />
            </div>
            <div className="block md:hidden">
              <PersonMobile
                person={person}
                currentIndex={personIndex}
                direction={direction}
                index={i}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:hidden relative bottom-0">
        {persons.map((_, i) => (
          <div
            onClick={() => {
              paginate(i)
            }}
            className={classNames(
              i === personIndex
                ? 'dark:bg-slate-100 bg-slate-700'
                : 'bg-slate-400',
              'w-4 h-4 mx-1 rounded-sm cursor-pointer flex justify-center items-center',
            )}
            key={i}
          >
            <div
              className={classNames(
                i === personIndex
                  ? 'dark:bg-slate-950 bg-slate-300'
                  : 'bg-slate-400',
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
