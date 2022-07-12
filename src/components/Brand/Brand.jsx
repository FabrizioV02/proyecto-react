import Brand from '../../assets/img/Brand-modified.png'
import {Link} from "react-router-dom"

const Logo = () => {
    return (
      <Link to="/">
        <img className='h-20 w-20' src={Brand}/>
      </Link>
    );
  };
  
  export default Logo;
  