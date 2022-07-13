import Cartwidget from "../CartWidget/CartWidget";
import Logo from "../Brand/Brand";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { name: "electronics", id: 0, route: "/category/electronics" },
    { name: "jewelery", id: 1, route: "/category/jewelery" },
    { name: "men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "women's clothing", id: 3, route: "/category/women's clothing" },
  ];

  return (
    <nav className="flex justify-center items-center bg-black text-white h-20">
      <div className="flex w-11/12 justify-between items-center">
        <Logo />
        {categories.map((category) => (
          <NavLink className='flex gap-6 uppercase' key={category.id}  to={category.route}>
            {category.name}
          </NavLink>
        ))}
        <Link to="/Cart"><Cartwidget/></Link>
      </div>
    </nav>
  );
};

export default Navbar;
