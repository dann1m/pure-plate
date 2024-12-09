import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">PURE PLATE</div>
        <ul className="nav-menu">
            <li>about</li>
            <li>recipes</li>
            <li>substitutes</li>
            <li className='nav-diet'>dietary info</li>
        </ul>
    </div>
  )
}

export default Navbar
