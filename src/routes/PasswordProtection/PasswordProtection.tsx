import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import "./PasswordProtection.scss";

type Props = {
  onSuccess: () => void;
};

const PasswordProtection: React.FC<Props> = (props) => {
  const password = "kandm";
  const [input, setInput] = React.useState("");

  function onSubmit() {
    if (password !== input) {
      alert("Password is incorrect please try again.");
      return;
    }

    props.onSuccess();
  }

  return (
    <div className="bg-grey parent-center" style={{ height: "100vh" }}>
      <div className="ta-center" style={{ padding: "0.5rem" }}>
        <Paper style={{ padding: "1rem" }} elevation={3}>
          <h2
            className="caligraphy-text"
            style={{
              fontSize: "64px",
              padding: "0 2rem",
              margin: "0 0 1rem 0",
            }}
          >
            Kieran & <br />
            Mallory's Wedding
          </h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className="mt1"
              type="submit"
            >
              Enter
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default PasswordProtection;
