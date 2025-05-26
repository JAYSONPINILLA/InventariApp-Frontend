import logo from '../assets/inventariapp3.jpeg';

function Home() {
  return (
    <>
      <div className="text-center py-5">
        <h3>InventariApp</h3>
        <p>Sistema de gestión y control de Inventario</p>
        <img src={logo} alt="Inventario App" height="150" />
      </div>
    </>
  );
}

export default Home;
