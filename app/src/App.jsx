import { Fragment } from "react"
import LandingPage from "./Pages/LandingPage"
import Header from "./Components/Header"
import PasswordGenerator from "./Pages/PasswordGenerator"

export const App = () => {
   return <Fragment>
      <Header />
      {/* <LandingPage /> */}
      <PasswordGenerator />
   </Fragment> 
}


