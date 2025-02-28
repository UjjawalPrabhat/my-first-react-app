import { Component } from "react"; // importing component class for class based component
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

// For state management we use class based components
// Functional components are used for UI
// ex - toggle button ke state ke hisab se ui change hoti hai
// state current data ko store krta hai

 // extends component likhne se component class ki saari functionalities ab navbar class acces kr skti hai
class Navbar extends Component {
  // initializing state
  // under class state must be an object
  state = { clicked: false };

  // using arrow funtion so that it automatically binds this i.e. refers to the class
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // using render coz we're extending our component
  // component ke saath render method likhna zaruri hai kyuki ui kaise hoga yhi btaata hai
  // render method is called when the component is mounted or updated
  
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          {/* toggle b/w both icons */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {/* in react use className instead of class */}
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar; // allows App.js to use this

// make the same navbar using useState hook