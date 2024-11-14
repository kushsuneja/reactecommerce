import {Link} from "react-router-dom";

const Header=()=>{
  return(
      <>
      
     

            <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KUSHFLEX PRO FIT</title>
  <link rel="stylesheet" href="web.css" />
  <header>
    <div className="container">
      <h1>KUSHFLEX PRO FIT </h1>
      <nav>
        <ul>
          <li>  <Link to="/">Home</Link>  </li>
          <li>  <Link to="/Shop">Shop</Link></li>
          <li>  <Link to="/Dashboard">Dashboard</Link></li>
          <li>  <Link to="/About">About</Link></li>
          <li>  <Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
            </>
  )
}
export default Header;

