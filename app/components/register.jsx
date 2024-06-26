"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="loginPageContainer">
      <form className="form-container">
        <label>Full Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Category:
          <div>
            <select>
              <option value="">Select...</option>
              <option value="admin">Admin</option>
              <option value="employees">Employees</option>
            </select>

            {
              <div>
                <label className="selectLabel" htmlFor="employeeRoles">
                  Select an employee role:
                </label>
                <select className="select">
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
            }
          </div>
        </label>
        <label>
          Password:
          <input type="password" />
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
