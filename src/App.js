import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import { useSelector } from "react-redux";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx"

function App() {


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
      <Router>
       
        <Routes>
          <Route path="/" element= {isLoggedIn ? <Home /> : <Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartDetails />}>
         
          </Route>
        </Routes>
     
      </Router>
  );
}

export default App;
