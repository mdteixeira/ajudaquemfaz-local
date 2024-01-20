import {
  Funnel,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  UserCircle,
} from '@phosphor-icons/react';

const Header = () => {
  return (
    <div>
      <div className="flex w-[100%] justify-between py-4">
        <div className="flex items-center justify-center w-1/5 logo-container">
          {/* <img
            src="src/assets/Ajuda quem faz.png"
            alt="Logo do website"
            className="w-auto h-16"
          /> */}
          <h1 className="text-xl font-bold">Ajuda quem Faz</h1>
        </div>
        <div className="input-group flex justify-stretch w-[100%] border-primary-300 border-2 border-none rounded-3xl">
          <button
            className="flex items-center justify-center w-1/12 gap-3 text-sm font-bold bg-secondary-500 rounded-s-3xl"
          >
            <Funnel size={36} color="white" weight="bold" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-neutral-200 px-10 w-[100%] text-xl"
          />
          <button className="grid place-content-center bg-secondary-500 rounded-e-3xl w-[12.5%]">
            <MagnifyingGlass weight="bold" size={32} color="white" />
          </button>
        </div>
        <div id="header-end" className="flex items-center w-1/6 h-100 justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <ShoppingCartSimple className="text-secondary-500" size={58} weight="duotone" />
          </div>
          <UserCircle className="text-secondary-500" size={64} weight="duotone" />
        </div>
      </div>
      <div>
        <section className="h-14 w-[100%] bg-primary-500 text-white flex justify-around">
          <button>
            <List size={32} color="white" weight="bold" />
          </button>
          <div className="flex items-center w-11/12 text-lg font-bold justify-evenly">
            <p>Casa e Decoração</p>
            <p>Moda</p>
            <p>Pets</p>
            <p>Saúde e beleza</p>
            <p>Jogos e brinquedos</p>
            <p>Eco</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
