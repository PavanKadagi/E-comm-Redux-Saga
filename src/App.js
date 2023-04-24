// import { Route } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
