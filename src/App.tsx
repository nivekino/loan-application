import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main className="container mx-auto mb-8 mt-[10vh]">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
