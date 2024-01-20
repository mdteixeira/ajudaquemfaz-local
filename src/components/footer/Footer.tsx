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
      <div className="grid grid-cols-3 gap-16 p-8 container mx-auto">
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
      <section className="flex justify-between  items-center bg-primary-400">
        <div className="h-20 w-1/12 flex justify-center">
          <img src="src/assets/Ajuda quem faz.png" alt="" className="h-20" />
        </div>
        <section className="flex gap-8 text-white w-1/4 justify-evenly">
          <FacebookLogo color="white" size={42}></FacebookLogo>
          <LinkedinLogo color="white" size={42}></LinkedinLogo>
          <InstagramLogo color="white" size={42}></InstagramLogo>
          <YoutubeLogo color="white" size={42}></YoutubeLogo>
        </section>
      </section>
      <section className="flex justify-between">
        <div className="font-bold flex gap-2 items-center px-4">
          <Copyright></Copyright>
          <p>Copyright 2024</p>
        </div>
        <div className="font-bold flex gap-3 px-4">
          <p>Termos de Uso</p>
          <p>Política de Privacidade</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
