import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Text
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Rating System</FooterLink>
            <FooterLink href="#">Submit Feedback</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink><a href="tel:555-123-4567">
                    <span class="material-icons">Phone: </span>555-123-4567</a></FooterLink>
            <FooterLink><a href="mailto:dubdumps@uw.edu">
                    <span class="material-icons">Email: </span>dubdumps@uw.edu</a></FooterLink>
          </Column>
        </Row>
        <Text>Dub Dumps is brought to you by University of Washington students Amelia, Nic, Sydney, and Zach,
            created as a final project for INFO 340. Hope the site helps you in your darkest times!
        </Text>
      </Container>
    </Box>
  );
};
export default Footer;