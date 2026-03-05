import React, { useState } from "react";
import "./EmployeeForm.css";
import { useNavigate } from "react-router-dom";

export interface IEmployee {
  firstName: string;
  lastName: string;
  address: string;
}

interface Props {
  addEmployee: (emp: IEmployee) => void;
}

interface EmployeeErrors {
  firstName?: string;
  lastName?: string;
  address?: string;
}

const EmployeeForm: React.FC<Props> = ({ addEmployee }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<IEmployee>({
    firstName: "",
    lastName: "",
    address: "",
  });

  const [errors, setErrors] = useState<EmployeeErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: EmployeeErrors = {};

    if (!employee.firstName.trim()) newErrors.firstName = "Required";
    if (!employee.lastName.trim()) newErrors.lastName = "Required";
    if (!employee.address.trim()) newErrors.address = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      console.log("Employee Data:", employee);
      addEmployee(employee);
      alert("Employee data saved successfully!");

      setEmployee({
        firstName: "",
        lastName: "",
        address: "",
      });
      navigate("/employee");
    }
  };

  return (
    <div className="employee-form">
      <h2>Employee Form</h2>

      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={employee.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={employee.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={employee.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div>
        <button onClick={handleSave}> Save</button>
      </div>
    </div>
  );
};

export default EmployeeForm;
