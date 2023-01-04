import { Button, Container } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { INVITES } from "../../shared/Invites";
import { Invitee } from "../../shared/models/Invitee";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Invite.scss";
import bgTop from "../../assets/images/small-bg-top.png";
import bgBottom from "../../assets/images/small-bg-bottom.png";

const Invite: React.FC = () => {
  const { id } = useParams();
  const [invitee, setInvitee] = React.useState<Invitee>();

  React.useEffect(() => {
    const _invitee = INVITES.find((i) => i.id === id);

    if (_invitee) {
      setInvitee(_invitee);
    }
  }, [id]);

  if (!invitee) {
    return <PageNotFound />;
  }

  return (
    <div className="Invite">
      <div
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        className="bg-grey"
      >
        <Container
          maxWidth="lg"
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
          className="envbox-container"
        >
          {/* <div className="envbox">
            <div className="env">
              <label htmlFor="open-env">
                <div className="open-env">
                  <label className="top" htmlFor="open-env"></label>
                  <div className="content">
                  <img src={bgTop} alt="bg top" className="bg-top" />
                    <h2>To {invitee.names.join(" & ")}</h2>
                    <p>
                      You are formally invited to the wedding of Kieran and
                      Mallory at the Sheene Mill on the 22nd May 2023.
                    </p>
                    <Button
                      variant="contained"
                      component={Link}
                      to={`/rsvp/${id}`}
                      color="primary"
                    >
                      RSVP
                    </Button>
                    <br/>
                    <br/>
                    <img src={bgBottom} alt="bg top" className="bg-bottom" />
                    <br />
                    <br />
                  </div>
                  <div className="rest"></div>
                </div>
              </label>
            </div>
          </div> */}

          <div className="envelope" title="">
            <div className="back"></div>
            <form className="letter ta-center">
              <img src={bgTop} alt="bg top" className="bg-top" />
              <h2>To {invitee.names.join(" & ")}</h2>
              <p>
                You are formally invited to the wedding of Kieran and Mallory at
                the Sheene Mill on the 22nd May 2023.
              </p>
              <Button
                variant="contained"
                component={Link}
                to={`/rsvp/${id}`}
                color="primary"
              >
                RSVP
              </Button>
              <br />
              <br />
              <img src={bgBottom} alt="bg top" className="bg-bottom" />
              <br />
              <br />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Invite;
