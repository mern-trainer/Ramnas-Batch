import { Fragment } from "react"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import Explore from "./Components/Explore"

// import Button from "react-bootstrap/Button" // default import
// import Alert from "react-bootstrap/Alert"

import { Button, Image, Navbar, Nav, NavDropdown, Container, Carousel, Card, Form } from "react-bootstrap" // named import
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import Responsive from "./Pages/Responsive"
import States from "./Pages/states"
import PasswordGenerator from "./Pages/PasswordGenerator"
import Mapping from "./Pages/Mapping"
import TodoList from "./Pages/TodoList"
import ParentComponent from "./Pages/ParentComponent"
import { BrowserRouter, Routes, Route } from "react-router"

// react-router package

const App = () => {

   return <BrowserRouter>
      <Routes>
         <Route path="/todo" Component={TodoList}/>
      </Routes>
   </BrowserRouter>

}

export default App


