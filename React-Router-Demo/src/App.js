import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <main>
        <Routes>
          {/* Wild card route i.e redirect all the unknown path to welcome page. */}
          <Route path="/*" element={<Navigate to="/welcome" replace />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
