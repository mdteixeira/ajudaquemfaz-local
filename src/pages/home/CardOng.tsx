const CardOng = () => {
  return (
    <>
      <div className="p-5 bg-secondary-200 text-black rounded-3xl flex items-center gap-4">
        <img
          src="src/assets/Ajuda quem faz.png"
          width={80}
          height={80}
          className="bg-primary-400 rounded-full h-20 w-20"
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
