import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { db } from "./FirebaseConfig";
import firebase from "firebase";

function Form() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: "",
    dateOfBirth: "",
  });

  const handelOnChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    db.collection("FormData").add({
      FirstName: state.firstName,
      LastName: state.lastName,
      Age: state.age,
      City: state.city,
      DateOfBirth: state.dateOfBirth,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setState({
      firstName: "",
      lastName: "",
      age: "",
      city: "",
      dateOfBirth: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <form style={{ marginTop: 40 }}>
        <Typography variant="h4" align="center" style={{ marginBottom: 25 }}>
          FORM
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              size="medium"
              label="First Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 10 }}
              value={state.firstName}
              onChange={handelOnChange("firstName")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="medium"
              label="Last Name"
              variant="outlined"
              style={{ marginBottom: 10 }}
              value={state.lastName}
              onChange={handelOnChange("lastName")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="medium"
              label="Age"
              variant="outlined"
              style={{ marginBottom: 10 }}
              value={state.age}
              onChange={handelOnChange("age")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="medium"
              label="City"
              variant="outlined"
              style={{ marginBottom: 10 }}
              value={state.city}
              onChange={handelOnChange("city")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="medium"
              label="Date Of Birth"
              variant="outlined"
              style={{ marginBottom: 20 }}
              value={state.dateOfBirth}
              onChange={handelOnChange("dateOfBirth")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              style={{ marginRight: 10 }}
              onClick={handleSaveBtn}
              color="primary"
              fullWidth
            >
              <Link style={{ color: "white", textDecoration: "none" }}>
                Save
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/table" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="secondary" fullWidth>
                View
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Form;
