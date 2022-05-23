// Write your code here
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <div className="app-container">
    <navbar className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button type="button" testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" color="#616e7c" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button type="button" onClick={() => close()} testid="closeButton">
              <IoMdClose />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link className="nav-link" to="/">
                  <AiFillHome size="36" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link to="/about" className="nav-link">
                  <BsInfoCircleFill size="36" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </navbar>
  </div>
)

export default withRouter(Header)
