
import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./Containers/Home/Home";
import Footer from "./components/footer/Footer"
import FormSteps from "./Containers/FormSteps/FormSteps"
import CustomProvider from "./components/Context/Context";
import NotFound from "./Containers/notFound/notFound";



import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () =>{ 
  const currentPath = window.location.pathname;
  

  return(
    
    <BrowserRouter>
          <CustomProvider>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/ingresar" element={<FormSteps></FormSteps>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>

          </Routes>
          {currentPath !== '/ingresar' && <Footer />}
          </CustomProvider>
      </BrowserRouter>
    
  )
}

export default App;
