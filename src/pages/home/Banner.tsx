const Banner = () => {
  return (
    <>
      <div className="banner grid place-items-center h-[42.5vw]">
        <img src="./src/assets/banner1.png" alt="" className="w-full " />
        <div className="absolute flex flex-col justify-around w-full h-full px-16 text-3xl text-white backdrop-contrast-75 backdrop-brightness-75">
          <div className="top">
            <div className="flex-col items-center gap-4">
              <img
                src="https://www.amigosdobem.org/wp-content/uploads/2021/03/Novo-LOGO-01.png"
                alt=""
                height={128}
                width={128}
                className=""
              />
              <h1 className="mb-8 text-5xl font-bold">Amigos do Bem</h1>
            </div>
            <p className="w-[60%] text-justify">
              Presentes que ajudam a promover a inclusão social e a gerar renda e
              dignidade para famílias que vivem em regiões de extrema pobreza no{' '}
              <strong>sertão nordestino</strong>
            </p>
          </div>
          <div className="flex gap-8">
            <button className="p-2 px-8 text-black rounded-full bg-tertiary-100">
              Comprar produtos
            </button>
            <button className="p-5 border-4 rounded-full text-white-200 border-tertiary-100">
              Doar para a ONG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
