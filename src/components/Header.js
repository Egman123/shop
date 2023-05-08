import {NavLink as Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='NavLink'>
        <Link to='/'>Home</Link>
    </nav>
  )
}

export default Header