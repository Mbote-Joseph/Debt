import { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      name: name,
      address: address,
      email: email,
      telephone: telephone,
      password: password,
      confirmPassword: confirmPassword,
    };
    setFormData([...formData, newFormData]);
    setName("");
    setAddress("");
    setEmail("");
    setTelephone("");
    setPassword("");
    setConfirmPassword("");

    console.log(newFormData);

    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataKey"));
    if (data) {
      setFormData(data);
    }
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/api/register", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       });
  //   }, [formData]);

  //   useEffect(() => {
  //     postMessage("http://localhost:3000/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       });
  //   }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleTelephoneChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.email}</td>
              <td>{data.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Register;
