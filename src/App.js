import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import Filimotor from './pages/filimotor/Filimotor'
import Search from './pages/search/Search'
import Login from './pages/login/Login'
import Accounts from "./pages/account/Accounts";
import Information from "./pages/Information/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filimotor" element={<Filimotor />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:movieId" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
