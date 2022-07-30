import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'

import CheckoutPage from "./pages/CheckoutPage";
import Products from "./pages/Products";
import { useEffect, useState } from "react";

function App() {

  const [loggedInEmail, setLoggedInEmail] = useState("")

  // console.log(loggedInEmail)

  // const [loginFlag, setLoginFlag] = useState(false);
  return (
    <>
    <NavBar email={loggedInEmail} />
    <BrowserRouter>
        <Routes>
            {}
            <Route path='/login' element={<Login loggedEmail={loggedInEmail} setLoggedEmail={setLoggedInEmail} />} />
            <Route index path='/' element={<Signup  />} />
            {}
            {}
        </Routes>
    </BrowserRouter>
    {}

    </>
  );
}

export default App;
