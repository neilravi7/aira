// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Layout from "./layout/Layout";

//pages
import Home from "./pages/Home";
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<Navigate to="/home"/> } />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
