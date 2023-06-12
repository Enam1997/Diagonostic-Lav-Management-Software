import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./component/topbar/Topbar.jsx";

import Home from "./pages/homePage/Home";
import Sidebar from "./component/sidebar/Sidebar";
import PatientDetails from "./pages/patientDetails/PatientDetails";
import Schedule from "./pages/schedulePage/Schedule";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient/create" element={<PatientDetails />} />

            <Route path="/schedule" element={<Schedule />} />

            {/* <Route path="/users" element={<Users />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<Products />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
