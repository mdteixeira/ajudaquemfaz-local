const Ideia = () => {
  return (
    <>
      <div className="bg-primary-200 w-100 py-8 px-16 grid grid-cols-2 gap-16">
        <section>
          <h2 className="font-bold text-2xl">
            É pessoa jurídica? <br></br> Cadastre seu CNPJ para realizar doações
          </h2>
          <ul className="pt-8 mx-8 list-disc">
            <li className="text-xl">Item </li>
            <li className="text-xl">Item</li>
            <li className="text-xl">Item</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl">
            É do terceiro setor? <br></br> Cadastre seu projeto na plataforma
          </h2>
          <ul className="pt-8 mx-8 list-disc">
            <li className="text-xl">Item </li>
            <li className="text-xl">Item</li>
            <li className="text-xl">Item</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Ideia;
