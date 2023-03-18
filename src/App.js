import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./component/topbar/Topbar.jsx";

import Home from "./pages/homePage/Home";
import Sidebar from "./component/sidebar/Sidebar";
import PatientDetails from "./pages/patientDetails/PatientDetails";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/create" element={<PatientDetails />} />
          {/* <Route path="/users" element={<Users />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<Products />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
