import Cartwidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
      </ul>
      <Cartwidget/>
    </nav>
  );
};

export default Navbar;
