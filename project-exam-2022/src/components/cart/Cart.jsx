import React from "react";
import Navigation from "../layout/Navigation";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Breadcrumb from "react-bootstrap/breadcrumb";

function Cart() {
  return (
    <>
      <Navigation />
      <div className="background">
        <Container className="container__content">
          <Breadcrumb>
            <Breadcrumb.Item href="/browse">Browse Games</Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
          </Breadcrumb>
          <Heading title="Cart" />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
