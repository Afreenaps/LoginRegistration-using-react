import React, { useState } from "react";
import "./Form.css";

export default function RegistrationForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    dept: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleRegister}>
        <h2>Register</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <select
          name="dept"
          value={formData.dept}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics & Communication</option>
          <option value="EEE">Electrical & Electronics</option>
          <option value="MECH">Mechanical</option>
          <option value="CIVIL">Civil</option>
        </select>

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={onSwitch}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
