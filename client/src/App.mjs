import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/Landing-Page/LandingPage.jsx";
import Login from "./pages//Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import InvoiceInput from "./pages/Invoice-Input/InvoiceInput.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import NB001 from "./pages/Templates_designs/NB001.jsx";
import NB002 from "./pages/Templates_designs/NB002.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Finances from "./pages/Finances/Finances.jsx";
import Step2 from "./pages/Step-2/Step2.jsx";
import Report from "./pages/Report/Report.jsx";


function App() {

  const baseURL = process.env.REACT_APP_BASE_API_URL;
  axios.defaults.baseURL = baseURL;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/invoiceinput' element={<InvoiceInput />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/NB001' element={<NB001 />} />
          <Route path='/NB002' element={<NB002 />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/finances' element={<Finances />} />
          <Route path='/selectTemplate' element={<Step2 />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
