import React from "react";
import Navigation from "../layout/Navigation";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Breadcrumb from "react-bootstrap/breadcrumb";
import GameList from "./GameList";

function Browse() {
  return (
    <>
      <Navigation />
      <div className="background">
        <Container className="container__content">
          <Breadcrumb>
            <Breadcrumb.Item active>Browse Games</Breadcrumb.Item>
          </Breadcrumb>
          <Heading title="Browse Games" />
          <GameList />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Browse;
