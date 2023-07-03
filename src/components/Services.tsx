'use client'

import Image from 'next/image'
import React from 'react'
import lawyerIcon from '../../public/icons/lawyer66.png'
import scalesIcon from '../../public/icons/scales100.png'
import groupIcon from '../../public/icons/businessGroup100.png'

function Services() {
  return (
    <section className="bg-stone-100 pt-10 flex flex-wrap items-center justify-evenly">
      <div className="flex w-[500px] bg-white mb-10">
        <div className="p-5 bg-primary">
          <Image
            src={lawyerIcon}
            width="66"
            height="66"
            alt="lawyer"
          />
        </div>
        <div className="p-5">
          <h1 className="text-primary">Agenda</h1>
          <h2 className="text-stone-600 text-3xl font-serif">Tu cita</h2>
        </div>
      </div>
      <div className="flex w-[500px] bg-white mb-10">
        <div className="p-5 bg-primary">
          <Image
            src={scalesIcon}
            width="66"
            height="66"
            alt="lawyer"
          />
        </div>
        <div className="p-5">
          <h1 className="text-primary">Obtén gratis</h1>
          <h2 className="text-stone-600 text-3xl font-serif">Asesoramiento</h2>
        </div>
      </div>
      <div className="flex w-[500px] bg-white mb-10">
        <div className="p-5 bg-primary">
          <Image
            src={groupIcon}
            width="66"
            height="66"
            alt="lawyer"
          />
        </div>
        <div className="p-5">
          <h1 className="text-primary ">Puedes fácilmente</h1>
          <h2 className="text-stone-600 text-3xl font-serif">Unirte a nuestro equipo</h2>
        </div>
      </div>
    </section>
  )
}

export default Services