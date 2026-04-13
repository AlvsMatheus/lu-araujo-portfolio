import Image from "next/image";

const Header = () => {
  return (
    <header
      className="relative h-full w-full bg-cover bg-center md:bg-top-right bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background/esmalte_background.png')" }}
    >
      <div className="flex flex-col justify-center items-center gap-30 md:gap-10">
        <div className="flex justify-between items-center w-full px-5 py-5 gap-4 md:px-20 md:py-8">
          <nav className="hidden md:flex justify-center items-center gap-2 md:gap-8 md:text-sm lg:text-lg uppercase">
            <a className="relative text-[#923e3e] group cursor-pointer">
              Home
              <span className="underline_effect"></span>
            </a>
            <a className="relative text-[#923e3e] group cursor-pointer">
              Quem sou
              <span className="underline_effect"></span>
            </a>
            <a className="relative text-[#923e3e] group cursor-pointer">
              Serviços
              <span className="underline_effect"></span>
            </a>
            <a className="relative text-[#923e3e] group cursor-pointer">
              Contato
              <span className="underline_effect"></span>
            </a>
          </nav>
          <span className="flex justify-center items-center text-[10px] lg:text-[12px] bg-[#923e3e] rounded-full text-white px-3 lg:px-5 py-4 lg:py-4">
            <a className="uppercase font-bold" href="#">
              Marcar horário
            </a>
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="text-8xl md:text-7xl lg:text-9xl text-[#923e3e] text-center text-nowrap"
            style={{ fontFamily: "var(--font-daydream)" }}
          >
            Lu <span className="text-black">Araújo</span>
          </h1>

          <span className="flex items-center gap-4 text-md lg:md:text-[1.2rem] text-[#923e3e]">
            <p>Serviços à domicilio</p>
            <Image
              src={"/icons/home_icon.png"}
              alt="home icon"
              width={30}
              height={30}
            ></Image>
          </span>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[67%] md:top-1/3 md:left-10 flex flex-col justify-center items-center gap-8">
        <div className="flex gap-4 md:flex-col">
          <a
            className="flex justify-center items-center rounded-full p-3 bg-[#923e3e] hover:scale-105 transition-all duration-150 ease-in-out"
            href="#"
          >
            <Image
              width={20}
              height={20}
              src={"/icons/instagram_white.png"}
              alt={"instagram icon"}
            ></Image>
          </a>
          <a
            className="flex justify-center items-center rounded-full p-3 bg-[#923e3e] hover:scale-105 transition-all duration-150 ease-in-out"
            href="#"
          >
            <Image
              width={20}
              height={20}
              src={"/icons/facebook_white.png"}
              alt={"facebook icon"}
            ></Image>
          </a>
          <a
            className="flex justify-center items-center rounded-full p-3 bg-[#923e3e] hover:scale-105 transition-all duration-150 ease-in-out"
            href="#"
          >
            <Image
              width={20}
              height={20}
              src={"/icons/whatsapp_white.png"}
              alt={"whatsapp icon"}
            ></Image>
          </a>
        </div>
        <div className="md:hidden flex flex-col text-center gap-4 text-[#923e3e]">
          <a href="#">Quem sou</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
