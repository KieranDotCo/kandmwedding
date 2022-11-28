import { Button, Container, Paper } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React from "react";
import * as Yup from "yup";
import "./RSVP.scss";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
});

enum SentStatus {
  Unsent,
  Sent,
  Failed,
}

const RSVP: React.FC = () => {
  const [sent, setSent] = React.useState(SentStatus.Unsent);
  return (
    <div className="RSVP bg-grey">
      <Container maxWidth="lg" style={{ paddingBottom: "1rem" }}>
        <h2
          className="cali-title-text ta-center"
          style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
        >
          RSVP
        </h2>
        <Paper variant="outlined" style={{ padding: "2rem 1rem" }}>
          {sent === SentStatus.Sent ? (
            <p>Done!</p>
          ) : (
            <Formik
              initialValues={{
                name: "",
              }}
              onSubmit={(values) => {
                axios({
                  method: "POST",
                  url: "https://formbold.com/s/9EQ89",
                  data: values,
                })
                  .then((r) => {
                    setSent(SentStatus.Sent)
                  })
                  .catch((r) => {
                    setSent(SentStatus.Failed)
                  });
              }}
              validationSchema={ValidationSchema}
            >
              {({ errors, touched, values }) => (
                <Form noValidate={true}>
                  <Field
                    component={TextField}
                    name="name"
                    type="name"
                    label="Name"
                    fullWidth
                  />
                  <div className="mt1">
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                    >
                      Confirm
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default RSVP;
