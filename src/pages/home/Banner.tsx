const Banner = () => {
  return (
    <>
      <div className="banner grid place-items-center h-[42.5vw]">
        <img src="src/assets/banner1.png" alt="" className=" w-[100%] " />
        <div className="absolute flex flex-col justify-around text-white text-3xl w-[100%] h-[100%] px-16 backdrop-contrast-75 backdrop-brightness-75">
          <div className="top">
            <div className="flex-col gap-4 items-center">
              <img
                src="https://www.amigosdobem.org/wp-content/uploads/2021/03/Novo-LOGO-01.png"
                alt=""
                height={128}
                width={128}
                className=""
              />
              <h1 className="font-bold text-5xl mb-8">Amigos do Bem</h1>
            </div>
            <p className="w-[60%] text-justify">
              Presentes que ajudam a promover a inclusão social e a gerar renda e
              dignidade para famílias que vivem em regiões de extrema pobreza no{' '}
              <strong>sertão nordestino</strong>
            </p>
          </div>
          <div className="flex gap-8">
            <button className=" bg-tertiary-100 text-black p-2 px-8 rounded-full">
              Comprar produtos
            </button>
            <button className="text-white-200 border-tertiary-100 border-4 p-5 rounded-full">
              Doar para a ONG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
