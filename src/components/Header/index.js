import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import {MdLogout} from 'react-icons/md'
import './index.css'

const Header = props => {
  const [loginStatus, setLoginStatus] = useState(false)
  const onClickLogin = () => {
    const {history} = props
    history.replace('/login')
  }

  const onClickRegister = () => {
    const {history} = props
    history.replace('/signup')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/ds1piowcn/image/upload/c_crop,w_700,h_200/v1722322110/political_India_hofufb.jpg"
          alt="website logo"
        />

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        {loginStatus ? (
          <button type="button" className="logout-desktop-btn">
            Logout
          </button>
        ) : (
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogin}
          >
            Login
          </button>
        )}
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickRegister}
        >
          Register
        </button>

        <button type="button" className="logout-mobile-btn">
          <MdLogout />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
