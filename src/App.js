import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import ResetPassword from "./components/formforgetpassword";
import Header from "./pages/nave_daschboard";
import Header1 from "./pages/dachboardSitting";
import Header2 from "./pages/dachboardOrders";






function App() {
  return (
    <Router>
      <main
        className="q-page min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden"
        style={{ minHeight: 560 }}
      >
        {/* Background Shapes */}
       

        {/* Router Pages */}
     
          <Routes>
            <Route path="/regester" element={<Container2/>} />
            <Route path="/login" element={<Container1 />} />
            <Route path="/forgetpasword" element={<ResetPassword />} />
            <Route path="/daschboard" element={<Header />} />
            <Route path="/my-account/settings" element={<Header1 />} />
            <Route path="/my-account/orders" element={<Header2 />} />



          </Routes>
  
      </main>
    </Router>
  );
}

export default App;
