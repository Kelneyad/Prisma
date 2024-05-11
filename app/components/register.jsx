import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ categoryArray, setCategoryArray }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedEmployeeRole, setSelectedEmployeeRole] = useState("");
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);

  const handleRoleChange = (e) => {
    const selectedValue = e.target.value;
    setCategory(selectedValue);
    setSelectedEmployeeRole("");
    if (selectedValue === "employees") {
      setShowEmployeeDropdown(true);
    } else {
      setShowEmployeeDropdown(false);
      setCategoryArray((prevArray) => {
        if (
          !prevArray.includes(selectedValue) &&
          selectedValue !== "employees"
        ) {
          return [...prevArray, selectedValue];
        }
        return prevArray;
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      category.length === 0
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, category, password }),
        });
        if (response.ok) {
          console.log("User created successfully");
        } else {
          console.log("Error creating user:", response.error);
          alert(response.error);
          return;
        }
      } catch (error) {
        console.log("err", error.message);
      }
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Category:", category);
      console.log("Selected Employee Role:", selectedEmployeeRole);
    }
  };

  return (
    <div className="loginPageContainer">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Category:
          <div>
            <select value={category} onChange={handleRoleChange}>
              <option value="">Select...</option>
              <option value="admin">Admin</option>
              <option value="employees">Employees</option>
            </select>

            {showEmployeeDropdown && (
              <div>
                <label className="selectLabel" htmlFor="employeeRoles">
                  Select an employee role:
                </label>
                <select
                  className="select"
                  value={selectedEmployeeRole}
                  onChange={(e) => setSelectedEmployeeRole(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>UX Designer</option>
                  <option value="ui_developer">UI Developer</option>
                  <option value="SQL_Developer">SQL Developer</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Web_Developer">Web Developer</option>
                  <option value="Software_Engineer">Software Engineer</option>
                  <option value="Application_Developer">
                    Application Developer
                  </option>
                  <option value="IT">IT</option>
                  <option value="Cloud_Architect">Cloud Architect</option>
                  <option value="Technical_Specialist">
                    Technical Specialist
                  </option>
                </select>
              </div>
            )}
          </div>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          Already have in account..? <span>Sign Up</span>{" "}
        </p>
      </form>
    </div>
  );
}
