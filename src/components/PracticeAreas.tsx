
import familyIcon from "../../public/icons/family-64.png";
import educationIcon from "../../public/icons/education-64.png";
import injuryIcon from "../../public/icons/injury-64.png";
import criminalIcon from "../../public/icons/criminal-64.png";
import houseIcon from "../../public/icons/house-64.png";
import balanceIcon from "../../public/icons/balance-100.png";
import Image from "next/image";


function PracticeAreas() {

  return (
    <section className="bg-slate-100 text-stone-700 text-center overflow-hidden p-4 sm:p-28">
      <div>
        <h1 className="font-serif text-primary text-lg">
          Como podemos ayudarte
        </h1>
        <h2 className="text-4xl font-serif text-stone-700">Area de practica</h2>
        <div className="divider w-[90px] h-1.5 text-primary bg-primary mx-auto rounded-xl" />
      </div>
      <div className="mt-24 w-2/3 mx-auto">
        <ul className="grid grid-cols-3 content-between gap-16">
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={familyIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Derecho Familiar</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={educationIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Derecho Educativo</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={injuryIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Daño personal</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={criminalIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Derecho Criminal</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={houseIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Derecho de propiedad</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="border rounded-full border-primary p-5">
              <Image src={balanceIcon} width="134" height="134" alt="" />
            </div>
            <div className="text-left ml-10">
              <h3 className="font-serif text-2xl">Derecho de negocio</h3>
              <div className="divider w-[40px] h-0.5 mt-0 text-primary bg-primary rounded-xl" />
              <p className="text-stone-600 text-sm font-mono ">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PracticeAreas;