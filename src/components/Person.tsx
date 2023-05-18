import Image from 'next/image'
import React from 'react'

interface PersonProps {
  name: string;
  title: string;
  image: string;
}

const Person = ({ name, title, image }: PersonProps) => {
  return (
    <div className="relative flex">
      <div className="rounded-xl w-64 dark:bg-slate-800 bg-slate-100">
        <div className="h-80 relative z-10">
          <Image
            src={image}
            alt=""
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-3xl mb-3 font-black dark:text-slate-100 text-slate-950">{name}</h3>
          <h4 className="text-base mb-3 dark:text-slate-100 text-slate-950">{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default Person
