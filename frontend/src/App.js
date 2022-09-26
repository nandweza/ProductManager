import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AddProduct from './components/AddProduct';
import ListProducts from './components/listProducts';
import EditProduct from './components/editProduct';
import ProductDetails from './components/ProductDetails';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/listProducts" element={<ListProducts />}></Route>
          <Route path="/editProduct" element={<EditProduct />}></Route>
          <Route path="/ProductDetails" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
