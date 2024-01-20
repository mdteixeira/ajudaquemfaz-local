import Presente from './Presente';

const Presentes = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-2xl">Presentes</h2>
      <section className="flex overflow-auto justify-evenly py-8">
        <Presente />
        <Presente />
        <Presente />
        <Presente />
      </section>
    </div>
  );
};

export default Presentes;
