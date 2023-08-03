import React from 'react'
import Image from 'next/image'
import lawyerPic from '../../public/pictures/lawyer1.jpg'
import firmaPic from '../../public/pictures/firma.png'

export default function About() {
  return (
    <section className="bg-white">
      <div className="flex flex-wrap justify-center py-32">
        <div className="bg-primary h-4/6 ml-5 mr-10 mb-10">
          <Image
            src={lawyerPic}
            width="550"
            height="550"
            alt="lawyer1"
            className="relative left-5 top-5 "
          />
        </div>
        <div className="mx-10 mt-7 text-slate-700">
          <h1 className="font-serif text-3xl mb-10">
            Sobre Nosotros
          </h1>
          <p className="leading-8 pb-10">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            <br />
            roots in a piece of classical Latin literature from 45 BC, making it over 2000
            <br />
            years old. Richard McClintock, a Latin professor at,
          </p>
          <p className="leading-8 pb-10">
            and going through the cites of the word in classical literature, discovered the
            <br />
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
            <br />
            of de Finibus Bonorum et Malorum
          </p>
          <button className="bg-primary py-3 px-6 text-white font-semibold hover:brightness-110 ease-in duration-200">
            Más Sobre Nosotros...
          </button>
          <div>
            <Image
              src={firmaPic}
              alt="lawyer1"
              className="relative left-5 top-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}