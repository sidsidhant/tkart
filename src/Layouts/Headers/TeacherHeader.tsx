import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@styles/shared.style";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import LogoHeader from "../../../public/images/logos/TestKart-logo.png";

function TeacherHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container>
            <Navbar.Brand href="/" className="imagePlace">
              {/* <img
                src="/images/logos/testkart.svg"
                alt=""
                className="img-fluid ms-n5"
                width={135}
                height={135}
              /> */}

<div className="logo-box">
              <Image src={LogoHeader} alt="testkart-logo"  />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShow(true)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
            >
              <Offcanvas.Body className="justify-content-end trial_box mt-0 ">
                <Link href="#features">Features</Link>
                <Link href="#how_it_work">How it works</Link>
                <Link href="#faqs">FAQs</Link>
                <div className="buttons ms-2">
                  { <Link href="#join">
                    <Button
                      primary
                      className="d-flex justify-content-center align-items-center btn"
                    >
                      Request a demo
                    </Button>
                  </Link> }
                  {/* <Link href="https://app.testkart.in/" target={"_blank"}>
                    <Button className="d-flex justify-content-center align-items-center ">
                      Login
                    </Button>
                  </Link> */}
                </div>

                <div className="closeButton" onClick={handleClose}>
                  <RiCloseLine size={44} />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TeacherHeader;
