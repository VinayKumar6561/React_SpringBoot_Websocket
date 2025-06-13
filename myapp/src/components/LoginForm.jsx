import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/LoginForm.css'
function LoginForm() {
  const [formdata, setformdata] = useState({
    userid: '',
    username: '',
    role: ''
  });

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Enhanced submit handler with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple frontend validation
    const { userid, username, role } = formdata;
    if (!userid.trim() || !username.trim() || !role.trim()) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/insertdata', formdata);
      toast.success("User Inserted Successfully!");
      console.log('Server response:', response.data);

      // Reset form
      setformdata({ userid: '', username: '', role: '' });
    } catch (error) {
      console.error('Error inserting user:', error);
      toast.error("Error inserting user.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            name="userid"
            value={formdata.userid}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formdata.role}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Toast container to show messages */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default LoginForm;
