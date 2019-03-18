import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }

  navbarHandler = () => {
    console.log("Hello")
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        {" "}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    )
  }
}

export default Navbar
