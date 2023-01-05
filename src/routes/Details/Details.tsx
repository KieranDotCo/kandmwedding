import React from "react";
import "./Details.scss";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import {
  Container,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Details: React.FC = () => {
  const taxis = [
    {
      name: "Taxicode",
      url: "https://www.taxicode.com/quotes/EC3FAF310508D966FFF7E76AC39697D2/",
    },
    {
      name: "A1 Taxis",
      url: "https://www.a1taxis.net/services/",
    },
    {
      name: "Tiny Taxis",
      url: "https://www.tinystaxis.co.uk/",
    },
    {
      name: "Castle Taxis",
      url: "https://www.castlestaxisofhitchin.co.uk/ ",
    },
  ];

  const hotels = [
    {
      type: "Hotel",
      name: "Coach House Hotel",
      address: "Newmarket Road Heydon, Royston, SG8 7PN",
      url: "https://www.booking.com/Share-fltsNq",
      rooms: "Deluxe Double, Deluxe Twin Room, Deluxe Family Room",
      rates: "£89-£99",
      parking: "Free",
    },
    {
      type: "Hotel",
      name: "Old Bull Inn",
      address: "56 High Street, Royston, SG8 9AW, United Kingdom",
      url: "https://www.booking.com/Share-EVI0vS",
      rooms: "Double, Twin, 2 Bed Apartment",
      rates: "£108 - £240",
      parking: "Free",
    },
    // {
    //   type: "Apartments",
    //   name: "Market Hill Apartments",
    //   address: "29a Market Hill , Royston, SG8 9JS, United Kingdom ",
    //   url: "https://www.booking.com/Share-tmoVSbk",
    //   rooms: "4 Bed Apartment",
    //   rates: "£139",
    //   parking: "Free",
    // },
    {
      type: "Apartments",
      name: "1 Bed Apartment",
      address: "Hillside, Royston, SG8 9AY, United Kingdom ",
      url: "https://www.booking.com/Share-Nr5Fi2",
      rooms: "Apartment for 2 People",
      rates: "£104",
      parking: "Free",
    },
    {
      type: "Hotel",
      name: "Travelodge Letchworth",
      address:
        "Number Two, Avenue One, Letchworth Garden City, SG6 2HB, United Kingdom",
      url: "https://www.travelodge.co.uk/hotels/662/Letchworth-Garden-City-hotel?checkIn=22/05/2023&checkOut=23/05/2023&rooms[0][adults]=2&rooms[0][children]=0",
      rooms: "Double Room",
      rates: "£55.99",
      parking: "Free",
    },
    {
      type: "Hotel",
      name: "Premier Inn - Letchworth",
      address: "Station Rd, Letchworth Garden City SG6 3BQ",
      url: "https://www.premierinn.com/gb/en/hotels/england/hertfordshire/letchworth-garden-city/letchworth-garden-city.html?cid=GLBC_LETGAR",
      rooms: "Double/Twin/Family Rooms",
      rates: "£37-£62",
      parking: "£8",
    },
    {
      type: "Hotel",
      name: "Travelodge Cambridge Fourwentways",
      address: "A11 Fourwentways, Abington, CB21 6AP, United Kingdom",
      url: "https://www.travelodge.co.uk/hotels/19/Cambridge-Fourwentways-hotel?checkIn=22/05/2023&checkOut=23/05/2023&rooms[0][adults]=2&rooms[0][children]=0&sb=1",
      rooms: "Double Room",
      rates: "£54.99",
      parking: "Free",
    },
    {
      type: "B&B",
      name: "The Old Farm Yard",
      address: "19a Dolphin Lane, Melbourn, SG8 6AE, United Kingdom",
      url: "http://www.theoldfarmyardbb.co.uk/",
      rooms: "Double Room",
      rates: "Contact B&B",
      parking: "Contact B&B",
    },
    {
      type: "B&B",
      name: "The Old Magistrates Court",
      address:
        "The Old Magistrates Court, 1 Cross Lane, Melbourn, Cambridgeshire, SG8 6AG",
      url: "https://www.theoldmagistratescourt.co.uk/",
      rooms: "Double Room",
      rates: "Contact B&B",
      parking: "Contact B&B",
    },
    {
      type: "B&B",
      name: "Hall Farm",
      address:
        "Chishill Hall, 110 Hall Lane, Great Chishill nr Royston, Hertfordshire, SG8 8SH",
      url: "https://www.hallfarmbb.co.uk/",
      rooms: "Double & Family Rooms",
      rates: "Contact B&B",
      parking: "Contact B&B",
    },
    {
      type: "Hotel",
      name: "Holiday Inn Express - Duxford",
      address: "42 Station Rd E, Whittlesford, Bridge, Cambridge CB22 4WL",
      url: "https://www.ihg.com/holidayinnexpress/hotels/gb/en/cambridge/cbgdk/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-GB-_-CBGDK",
      rooms: "Double/Twin Rooms",
      rates: "~£80",
      parking: "£6",
    },
  ];

  return (
    <div className="Details">
      <div className="bg-grey">
        <Container maxWidth="lg">
          <h2
            className="cali-title-text ta-center"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            Getting Here
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6954386735347!2d0.010728416038481882!3d52.08527387973419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87f42a7bec5a5%3A0x4c319711d620b2db!2sSheene%20Mill%20Weddings!5e0!3m2!1sen!2suk!4v1669388579117!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Sheene Mill"
          ></iframe>
          <br />
          <br />
          <br />
        </Container>
      </div>
      <Container maxWidth="lg" style={{ paddingBottom: "2rem" }}>
        <img
          src={bgBottom}
          alt="vine divider"
          className="vine-divider vine-divider1"
        />
        <h2 className="plain-title-text ta-center">By Car</h2>
        <p>
          Sheene Mill can be easily accessed by road. The venue is just off the
          A10 from Royston heading to Cambridge. There is parking at the venue
          but we ask that you do not leave your car parked at the venue
          overnight unless you are staying at the venue.
        </p>
        <br />
        <h2 className="plain-title-text ta-center">By Train</h2>
        <p>
          Sheene Mill is a 5 minute walk from Meldreth Station which is on the
          Cambridge - London Kings Cross/St Pancras line. There is 1 train per
          hour from the station or 1 train every 30 minutes during peak.
        </p>
        <br />
        <h2 className="plain-title-text ta-center">By Taxi</h2>
        <p>
          We recommend that you book your taxis in advance, as the venue is not
          located in a large town taxis may not be available on demand. Below
          are list of recommended taxi firms.
        </p>
        <ul>
          {taxis.map((taxi) => {
            return (
              <li key={taxi.name}>
                <Link href={taxi.url}>{taxi.name}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
      <div className="bg-grey">
        <Container maxWidth="lg" style={{ paddingBottom: "2rem" }}>
          <img
            src={bgBottom}
            alt="vine divider"
            className="vine-divider vine-divider1"
          />
          <h2 className="plain-title-text ta-center">ACCOMMODATION</h2>
          <p>
            There are no rooms available at the venue, but there are many
            apartments, hotels and B&B's in the area. Below are a few
            recommended places to stay, there are also many hotels in Hitchin
            and Cambridge that are not listed.
          </p>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Rooms</TableCell>
                  <TableCell>Rates</TableCell>
                  <TableCell>Parking</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hotels.map((hotel) => {
                  return (
                    <TableRow key={hotel.name}>
                      <TableCell>{hotel.type}</TableCell>
                      <TableCell>
                        <Link href={hotel.url}>{hotel.name}</Link>
                      </TableCell>
                      <TableCell>{hotel.address}</TableCell>
                      <TableCell>{hotel.rooms}</TableCell>
                      <TableCell>{hotel.rates}</TableCell>
                      <TableCell>{hotel.parking}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </div>
  );
};

export default Details;
