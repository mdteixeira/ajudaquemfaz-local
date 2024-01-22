import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-16 p-8 mx-auto">
        <ul className="">
          <h2 className="text-2xl font-bold">Título da Lista</h2>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <ul className="">
          <h2 className="text-2xl font-bold">Título da Lista</h2>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <ul className="">
          <h2 className="text-2xl font-bold">Título da Lista</h2>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
      <section className="flex items-center justify-between bg-primary-400">
        <div className="flex justify-center w-1/12 h-20">
          <img src="./src/assets/Ajuda quem faz.png" alt="" className="h-20" />
        </div>
        <section className="flex w-1/4 gap-8 text-white justify-evenly">
          <FacebookLogo color="white" size={42}></FacebookLogo>
          <LinkedinLogo color="white" size={42}></LinkedinLogo>
          <InstagramLogo color="white" size={42}></InstagramLogo>
          <YoutubeLogo color="white" size={42}></YoutubeLogo>
        </section>
      </section>
      <section className="flex justify-between">
        <div className="flex items-center gap-2 px-4 font-bold">
          <Copyright></Copyright>
          <p>Copyright 2024</p>
        </div>
        <div className="flex gap-3 px-4 font-bold">
          <p>Termos de Uso</p>
          <p>Política de Privacidade</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
