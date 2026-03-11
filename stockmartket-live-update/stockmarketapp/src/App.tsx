import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshData } from "./features/stock/stockSlice";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import S1 from "./pages/S1";
import S2 from "./pages/S2";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(refreshData());
    }, 5000); // refresh every 5 sec

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>Stock Market App</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/s1">S1</Link> | <Link to="/s2">S2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/s1" element={<S1 />} />
          <Route path="/s2" element={<S2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
