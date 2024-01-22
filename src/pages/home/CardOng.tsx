const CardOng = () => {
  return (
    <>
      <div className="flex items-center gap-4 p-5 text-black bg-secondary-200 rounded-3xl">
        <img
          src="./src/assets/Ajuda quem faz.png"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full bg-primary-400"
        ></img>
        <div className="h-[100%]">
          <h2 className="font-bold">Nome da Ong</h2>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardOng;
