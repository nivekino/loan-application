import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <>
                  <Navbar />
                  <main className="mx-auto mb-8 mt-[10vh]">
                    <Dashboard />
                  </main>
                </>
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
};

export default App;
