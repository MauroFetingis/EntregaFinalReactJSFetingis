import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre Nosotros</Heading>
            <FooterLink href="/about">Metas</FooterLink>
            <FooterLink href="/about">Trabaja con nosotros</FooterLink>
          </Column>
          <Column>
            <Heading>Consultas frecuentes</Heading>
            <FooterLink href="/about">Blog de consultas</FooterLink>
            <FooterLink href="/about">Etc</FooterLink>
          </Column>
          <Column>
            <Heading>Contactanos</Heading>
            <FooterLink href="/about">Contactos</FooterLink>
          </Column>
          <Column>
            <Heading>Redes</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/?lang=es">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;