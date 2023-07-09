import Image from "next/image";

function Hero() {
  return (
    <div className="carousel h-screen w-full overflow-hidden">
      <div
        id="slide1"
        className="carousel-item relative w-full pt-[90px] sm:pt-[170px]"
      >
        <div className="bg-cover bg-bottom lg:bg-top w-full bg-no-repeat text-white bg-[url(/pictures/hero-1.jpg)] md:px-28">
          <div className="pt-40 lg:pt-56 px-16 md:px-36">
            <h1 className="md:text-xl">El corporativo judico mas talentoso</h1>
            <p className="text-4xl md:text-7xl font-serif my-10">
              Luchamos por tu justicia <br /> como tus amigos
            </p>
            <button className="bg-primary py-3 px-6 active:scale-95 text-white font-semibold hover:brightness-110 ease-in duration-200">
              Contáctanos...
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a
            href="#slide3"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black ease-in"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full pt-[90px] sm:pt-[170px]"
      >
        <div className="bg-cover bg-left w-full bg-no-repeat text-white bg-[url(/pictures/hero-2.jpg)] md:px-28">
          <div className="pt-40 lg:pt-56 px-16 md:px-36">
            <h1 className="md:text-xl">El corporativo judico mas talentoso</h1>
            <p className="text-4xl md:text-7xl font-serif my-10">
              Luchamos por tu justicia <br /> como tus amigos
            </p>
            <button className="bg-primary py-3 px-6 active:scale-95 text-white font-semibold hover:brightness-110 ease-in duration-200">
              Contáctanos...
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black ease-in"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full pt-[90px] sm:pt-[170px]"
      >
        <div className="bg-cover bg-center w-full bg-no-repeat text-white bg-[url(/pictures/hero-3.jpg)] md:px-28">
          <div className="pt-40 lg:pt-56 px-16 md:px-36">
            <h1 className="md:text-xl">El corporativo judico mas talentoso</h1>
            <p className="text-4xl md:text-7xl font-serif my-10">
              Luchamos por tu justicia <br /> como tus amigos
            </p>
            <button className="bg-primary py-3 px-6 active:scale-95 text-white font-semibold hover:brightness-110 ease-in duration-200">
              Contáctanos...
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black ease-in"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle border-primary bg-transparent hover:bg-primary hover:border-primary hover:text-black"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
