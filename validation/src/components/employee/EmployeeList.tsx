import { useNavigate } from "react-router-dom";
import type { IEmployee } from "./EmployeeForm";
import "./EmployeeGrid.css";

interface Props {
  employees: IEmployee[];
  setEmployee: React.Dispatch<React.SetStateAction<IEmployee[]>>;
}

const EmployeeList = (props: Props) => {
  const { employees } = props;

  const navigate = useNavigate();

  const goToAddPage = () => {
    navigate("/employee/add");
  };

  return (
    <div>
      <h3>Employee List</h3>

      <button onClick={goToAddPage}>Add Employee</button>

      <table className="employee-grid">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
