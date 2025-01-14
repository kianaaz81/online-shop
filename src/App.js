import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Navb from "./components/navbar/navbar";
import Bracelet from "./pages/bracelet/bracelet";
import Footer from "./components/footer/footer";
import Earring from "./pages/earring/earring";
import Ring from "./pages/ring/ring";
import Necklace from "./pages/necklace/necklace";
import { CartProvider } from "./context/shopcontext";
import ProductDetailPage from "./pages/product/productdetail";
import Login from "./pages/login/login";
import { UserProvider } from "./context/usercontext";
import SignUp from "./pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
        <CartProvider>

          <Pages/>
        </CartProvider> 
         </UserProvider>
      </Router>
    </div>
  );
}
const Pages = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
    
      {!isAuthPage && <Navb />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/earring" element={<Earring />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:category/:id" element={<ProductDetailPage />} />
      </Routes>
   
      {!isAuthPage && <Footer />}
       
    </>
  );
};

export default App;
