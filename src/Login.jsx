import React, { useState, useEffect } from "react";
// import './Login.css'
import { Link, useHistory, useNavigate } from "react-router-dom";

import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   abcd

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(`Username: ${username}, Password: ${password}`);
    var userData = {
      userEmail: username,
      password: password,
    };
    // Handle validations
    axios.post("main", userData).then((response) => {
      console.log(response);
      // Handle response
      if (response.data === "fail") {
          console.log("Login fail");
      }
      if (response.data === "success") {
          navigate("/map");
      }
    });

  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "400px",
          bgcolor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
          sx={{ mb: "20px" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
          sx={{ mb: "20px" }}
        />
        <Button type="submit" variant="contained" sx={{ mb: "20px" }}>
          Login
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span style={{ paddingRight: "10px" }}>OR</span>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{ backgroundColor: "#4caf50", color: "white", width: "100%" }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
