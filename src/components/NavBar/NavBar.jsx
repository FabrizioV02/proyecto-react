import Cartwidget from '../CartWidget/CartWidget';
import Logo from '../Brand/Brand';


const Navbar = () => {
  return (
    <nav className='flex justify-center items-center bg-black text-white h-20'>
      <div className='flex w-11/12 justify-between items-center'>
      <Logo/>
      <ul className='flex gap-6'>
        <li>
          <a href="#" className='uppercase'>Inicio</a>
        </li>
        <li>
          <a href="#" className='uppercase'>Productos</a>
        </li>
        <li>
          <a href="#" className='uppercase'>Contacto</a>
        </li>
        <li>
          <a href="#" className='uppercase'>Nosotros</a>
        </li>
        <li>
          <a href="#" className='uppercase'>Ubicacion</a>
        </li>
      </ul>
      <Cartwidget/>
      </div>    
    </nav>
  );
};

export default Navbar;
