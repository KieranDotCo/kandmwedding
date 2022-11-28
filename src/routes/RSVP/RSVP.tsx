import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Field, FieldArray, Form, Formik } from "formik";
import { RadioGroup, TextField } from "formik-mui";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import * as Yup from "yup";
import "./RSVP.scss";
import AddIcon from "@mui/icons-material/Add";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import bgBottom from "../../assets/images/small-bg-bottom.png";

const ValidationSchema = Yup.object().shape({
  guests: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Please enter the guests name."),
      diet: Yup.string().required("Please fill in this field or type N/A."),
    })
  ),
  email: Yup.string().required("Please enter an email address."),
  phone: Yup.string().required("Please enter a contact number."),
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
          style={{ paddingTop: "1rem", paddingBottom: "0rem" }}
        >
          <img
            src={bgBottom}
            style={{
              transform: "scaleY(-1)",
              height: "50px",
              marginRight: "0.5rem",
            }}
            alt=""
          />
          RSVP
          <img
            src={bgBottom}
            style={{
              transform: "scaleY(-1) scaleX(-1)",
              height: "50px",
              marginLeft: "0.5rem",
            }}
            alt=""
          />
        </h2>
        <Typography
          color="secondary"
          className="ta-center"
          style={{ paddingBottom: "1rem" }}
        >
          Please complete by XX-XX-XXXX
        </Typography>
        <Paper variant="outlined" style={{ padding: "2rem 1rem" }}>
          {sent === SentStatus.Sent ? (
            <p>Done!</p>
          ) : (
            <Formik
              initialValues={{
                guests: [
                  {
                    name: "",
                    diet: "",
                  },
                ],
                attending: "yes",
                email: "",
                phone: "",
                song: "",
              }}
              onSubmit={(values) => {
                axios({
                  method: "POST",
                  url: "https://formbold.com/s/9EQ89",
                  data: values,
                })
                  .then((r) => {
                    setSent(SentStatus.Sent);
                  })
                  .catch((r) => {
                    setSent(SentStatus.Failed);
                  });
              }}
              validationSchema={ValidationSchema}
            >
              {({ errors, touched, values }) => (
                <Form noValidate={true}>
                  <FieldArray
                    name="guests"
                    render={(arrayHelpers) => (
                      <>
                        {values.guests.map((guest, index) => {
                          return (
                            <Grid container key={index} spacing={1}>
                              <Grid item xs={12}>
                                <FormLabel>Guest {index + 1}</FormLabel>
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                                <Field
                                  component={TextField}
                                  name={`guests[${index}].name`}
                                  label={` Name`}
                                  margin="dense"
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  required={true}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PersonIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={6}
                                key={index}
                              >
                                <Field
                                  component={TextField}
                                  name={`guests[${index}].diet`}
                                  label={` Dietary Requirements/Allergies`}
                                  margin="dense"
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  required={true}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <RestaurantIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                          );
                        })}

                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={() =>
                            arrayHelpers.push({ name: "", diet: "" })
                          }
                          startIcon={<AddIcon />}
                        >
                          Add Guest
                        </Button>
                      </>
                    )}
                  />
                  <br />
                  <br />
                  <FormControl>
                    <FormLabel required>Attending?</FormLabel>
                    <Field component={RadioGroup} name="attending">
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Accepts with Pleasure"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="Declines with Regrets"
                      />
                    </Field>
                  </FormControl>
                  <br />
                  {values.attending === "yes" ? (
                    <Grid container spacing={1}>
                      <Grid item sm={12} md={9} lg={6}>
                        <Field
                          component={TextField}
                          name={`email`}
                          label={`Email Address`}
                          margin="dense"
                          type="text"
                          variant="outlined"
                          fullWidth
                          required={true}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item sm={12} md={9} lg={6}>
                        <Field
                          component={TextField}
                          name={`phone`}
                          label={`Contact Number`}
                          margin="dense"
                          type="text"
                          variant="outlined"
                          fullWidth
                          required={true}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PhoneIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item sm={12}>
                        <Field
                          component={TextField}
                          name={`song`}
                          label={`Enter a song you'd like the DJ to play`}
                          margin="dense"
                          type="text"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <QueueMusicIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  ) : null}
                  <div className="mt1">
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                    >
                      Submit
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
