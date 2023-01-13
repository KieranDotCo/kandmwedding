import {
  Alert,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { CheckboxWithLabel, RadioGroup, TextField } from "formik-mui";
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
import { useParams } from "react-router-dom";
import { INVITES } from "../../shared/Invites";

const ValidationSchema = Yup.object().shape({
  guests: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Please enter the guests name."),
        diet: Yup.string().required("Please fill in this field or type N/A."),
      })
    ),
  email: Yup.string().required("Please enter an email address."),
  phone: Yup.string().required("Please enter a contact number."),
  attending: Yup.string(),
  part: Yup.array().test(
    "part-is-required",
    "Please select which part(s) of the day you will attend.",
    function (value: any) {
      if (this.parent.attending === "yes") {
        if (!value || value.length === 0) {
          return false;
        }
      }

      return true;
    }
  ),
});

enum SentStatus {
  Unsent,
  Sent,
  Failed,
}

const defaultFormValues = {
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
  part: [],
};

const RSVP: React.FC = () => {
  const { id } = useParams();
  const [sent, setSent] = React.useState(SentStatus.Unsent);
  const [part, setPart] = React.useState("day");
  const [formValues, setFormValues] = React.useState(defaultFormValues);

  React.useEffect(() => {
    const _invitee = INVITES.find((i) => i.id === id);

    if (_invitee) {
      let invite = {
        guests: [] as any,
        attending: "yes",
        email: "",
        phone: "",
        song: "",
        part: [] as any,
      };
      _invitee.names.forEach((i) => {
        invite.guests.push({ name: i, diet: "" });
      });
      setFormValues(invite);
      setPart(_invitee.part);
    } else {
      setFormValues(defaultFormValues);
      setPart("day");
    }
  }, [id]);

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
          Please complete by 28-02-2023
        </Typography>
        <Paper variant="outlined" style={{ padding: "2rem 1rem" }}>
          {sent === SentStatus.Sent ? (
            <div className="ta-center">
              <img
                src={bgBottom}
                style={{
                  transform: "scaleY(-1)",
                  height: "50px",
                  margin: "auto 0",
                }}
                alt=""
              />
              <h2
                className="cali-title-text ta-center"
                style={{ paddingTop: "1rem", paddingBottom: "0rem" }}
              >
                Thank You!
              </h2>
              <p className="ta-center">Your response has been received.</p>
              <br />
              <img
                src={bgBottom}
                style={{
                  transform: "scaleY(-1) scaleX(-1)",
                  height: "50px",
                  marginLeft: "0.5rem",
                }}
                alt=""
              />
            </div>
          ) : (
            <Formik
              enableReinitialize
              initialValues={formValues}
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
                  {sent === SentStatus.Failed ? (
                    <>
                      <Alert severity="error">
                        There was an error submitting your response, please try
                        again.
                      </Alert>
                      <br />
                    </>
                  ) : null}
                  <FieldArray
                    name="guests"
                    render={(arrayHelpers) => (
                      <>
                        {values.guests.map((guest, index) => {
                          return (
                            <Grid
                              container
                              key={index}
                              spacing={1}
                              className="mb1"
                            >
                              <Grid item xs={6}>
                                <FormLabel>Guest {index + 1}</FormLabel>
                              </Grid>
                              <Grid item xs={6} className="ta-right">
                                <Button
                                  color="error"
                                  size="small"
                                  className="tt-none"
                                  onClick={() => arrayHelpers.remove(index)}
                                  disabled={values.guests.length === 1}
                                >
                                  Remove Guest
                                </Button>
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                                <Field
                                  component={TextField}
                                  name={`guests[${index}].name`}
                                  label={`Name`}
                                  margin="dense"
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  required={true}
                                  placeholder="Name"
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
                                  label={`Dietary Requirements/Allergies`}
                                  margin="dense"
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  required={true}
                                  placeholder="Dietary Requirements/Allergies"
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
                  <Grid container>
                    <Grid item xs={6}>
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
                            label="Declines with Regret"
                          />
                        </Field>
                      </FormControl>
                    </Grid>
                    {values.attending === "yes" ? (
                      <Grid item xs={6}>
                        <FormControl>
                          <FormLabel
                            required
                            error={!!(errors.part && touched.part)}
                          >
                            Which part(s) of the day will you be attending?
                          </FormLabel>
                          <Field
                            component={CheckboxWithLabel}
                            type="checkbox"
                            name="part"
                            value="day"
                            Label={{ label: "Day" }}
                            disabled={part === "evening"}
                          />
                          <Field
                            component={CheckboxWithLabel}
                            type="checkbox"
                            name="part"
                            value="evening"
                            Label={{ label: "Evening" }}
                          />
                        </FormControl>
                        <ErrorMessage
                          name="part"
                          render={(msg) => (
                            <FormHelperText error={true}>{msg}</FormHelperText>
                          )}
                        />
                      </Grid>
                    ) : null}
                  </Grid>

                  {values.attending === "yes" ? (
                    <Grid container spacing={1} className="mt1">
                      <Grid item sm={12} md={9} lg={6}>
                        <Field
                          component={TextField}
                          name={`email`}
                          label={`Email Address`}
                          margin="dense"
                          type="text"
                          variant="outlined"
                          placeholder="Email Address"
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
                          placeholder={`Contact Number`}
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
                          placeholder={`Enter a song you'd like the DJ to play`}
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
