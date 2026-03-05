import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import EmployeeList from "./components/employee/EmployeeList";
import { useState } from "react";
import EmployeeForm, {
  type IEmployee,
} from "./components/employee/EmployeeForm";

const Launcher = () => {
  const [employee, setEmployee] = useState<IEmployee[]>([]);

  return (
    <div>
      <Link to="/">Home | </Link>
      <Link to="/employee">Employees | </Link>
      <Link to="/employee/add">New Employee</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employee"
          element={
            <EmployeeList employees={employee} setEmployee={setEmployee} />
          }
        />
        <Route
          path="/employee/add"
          element={
            <EmployeeForm
              addEmployee={(emp) => setEmployee((prev) => [...prev, emp])}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Launcher;
