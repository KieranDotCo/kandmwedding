import { Button, Container } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { INVITES } from "../../shared/Invites";
import { Invitee } from "../../shared/models/Invitee";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Invite.scss";
import bgTop from "../../assets/images/small-bg-top.png";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import Auxiliary from "../../shared/components/Auxiliary/Auxiliary";

const Invite: React.FC = () => {
  const { id } = useParams();
  const [invitee, setInvitee] = React.useState<Invitee>();
  const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    const _invitee = INVITES.find((i) => i.id === id);

    if (_invitee) {
      setInvitee(_invitee);
    }
    setFetching(false);
  }, [id]);

  if (fetching) {
    return (
      <div className="Invite">
        <div
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          className="bg-grey"
        >
          <Container
            maxWidth="lg"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              minHeight: "796px",
            }}
          ></Container>
        </div>
      </div>
    );
  }

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
          <div className="envelope" title="">
            <div className="back"></div>
            <form className="letter ta-center">
              <img src={bgTop} alt="bg top" className="bg-top" />
              <h2 className="mt025 mb025">
                To{" "}
                {invitee.names.map((_invitee, index) => {
                  if (index === 0) {
                    return <Auxiliary key={_invitee}>{_invitee}</Auxiliary>;
                  } else if (index === invitee.names.length - 1) {
                    return <Auxiliary key={_invitee}> & {_invitee}</Auxiliary>;
                  }
                  return <Auxiliary key={_invitee}>, {_invitee}</Auxiliary>;
                })}
              </h2>
              <p className="mt05 mb05">
                Kieran Whiteman
                <br />
                &
                <br />
                Mallory James
              </p>
              <p className="mt05 mb05">
                Invite you to celebrate their marriage on <br />
                22nd May 2023 at {invitee.part === "day" ? "2:00pm" : "7:00pm"}
                <br />
                At Sheene Mill, Melbourn, SG8 6DX
              </p>
              <p className="mt05 mb05">RSVP By 28-02-2023</p>
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
