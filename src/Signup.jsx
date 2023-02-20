import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    maxWidth: 600,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="address"
          label="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="phone"
          label="Phone Number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email Address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="emergencyContact"
          label="Emergency Contact"
          id="emergencyContact"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="age"
          label="Age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="gender"
          label="Gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
