"use client";

import Image from "next/image";
import React from "react";
import facebookIcon from "../../public/icons/facebook.svg";
import twitterIcon from "../../public/icons/twitter.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import Link from "next/link";

function OurAttorneys() {
  return (
    <section
      id="attorneys"
      className="bg-[url('/imgs/team-bg.jpg')] bg-no-repeat bg-auto w-full bg-white"
    >
      <div className="flex items-center justify-center space-x-4 ">
        <div className="space-y-10 translate-x-36">
          <h1 className="font-serif text-primary text-3xl">
            Abogados calificados
          </h1>
          <h2 className="text-4xl font-bold text-slate-700">
            Necesitas un abogado?
            <br />
            Conoce a nuestros
            <br />
            expertos y profesionales
          </h2>
          <button className="bg-primary py-3 px-6 active:scale-95 text-white font-semibold hover:brightness-110 ease-in duration-200">
            Contáctanos...
          </button>
        </div>
        <div className="flex items-center z-10 translate-x-64">
          <div className="overflow-hidden group hover:shadow mr-5">
            <Image
              src="/imgs/team-05.jpg"
              width="257"
              height={600}
              alt="05"
              className="w-full h-full group-hover:scale-105 ease-in duration-300"
            />
            <div className="p-7 bg-slate-100 h-[115px] group-hover:-translate-y-16 group-hover:bg-white ease-in duration-300">
              <h1 className="font-serif text-primary text-3l">
                Abogado corporativo
              </h1>
              <h2 className="font-serif text-slate-700 text-2xl">
                Micheal Wagou
              </h2>
              <div className="flex items-center justify-evenly mt-7">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/facebook.svg"
                    width="25"
                    height="25"
                    alt="facebook"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    width="25"
                    height="25"
                    alt="linkedin"
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/twitter.svg"
                    width="25"
                    height="25"
                    alt="twitter"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden group hover:shadow">
            <Image
              src="/imgs/team-06.jpg"
              width="257"
              height={600}
              alt="06"
              className="w-full h-full group-hover:scale-105 ease-in duration-300"
            />
            <div className="p-7 bg-slate-100 h-[115px] group-hover:-translate-y-16 group-hover:bg-white ease-in duration-300">
              <h1 className="font-serif text-primary text-3l">
                Abogado general
              </h1>
              <h2 className="font-serif text-slate-700 text-2xl">
                Alex Mitchell
              </h2>
              <div className="flex items-center justify-evenly mt-7">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/facebook.svg"
                    width="25"
                    height="25"
                    alt="facebook"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    width="25"
                    height="25"
                    alt="linkedin"
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <Image
                    src="/icons/twitter.svg"
                    width="25"
                    height="25"
                    alt="twitter"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-no-repeat bg-cover bg-slate-500 from-primary to-primary bg-center w-[500px] h-[800px] bg- bg-[url(/imgs/bg-01.jpg)]" />
      </div>
    </section>
  );
}

export default OurAttorneys;
