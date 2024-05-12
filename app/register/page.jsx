"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    role: "",
    password: "",
  });
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let data = await fetch("/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(data)
    router.push("/")
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginPageContainer">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your full name ..."
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email ..."
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <div>
            <select defaultValue={""} name="category" onChange={handleChange}>
              <option value="">Select...</option>
              <option value="admin">Admin</option>
              <option value="employees">Employees</option>
            </select>

            {
              <div>
                <label className="selectLabel" htmlFor="employeeRoles">
                  Select an employee role:
                </label>
                <select
                  defaultValue={""}
                  name="role"
                  onChange={handleChange}
                  className="select"
                >
                  <option value="">Select...</option>
                  <option value="ux_developer">UX Designer</option>
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
            }
          </div>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password ..."
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <p onClick={() => {}}>
          Already have in account..? <span>Sign Up</span>{" "}
        </p>
      </form>
    </div>
  );
}
