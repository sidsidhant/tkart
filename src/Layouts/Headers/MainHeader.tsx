import Image from "next/image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@styles/shared.style";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Dropdown, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { _request } from "src/utils/request.util";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import LogoHeader from "../../../public/images/logos/TestKart-logo.png";

function MainHeader() {
  const router = useRouter();
  // const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [useremail, setUseremail] = useState("");
  const [cartBoolean, setCartBoolean] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<number>(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const dispatch = useDispatch();
  // //@ts-ignore
  // const cartData = useSelector((state) => state.cart);
  // useEffect(() => {
  //   //@ts-ignore
  //   dispatch(getCartData());
  //   setCartBoolean(true);
  // }, [dispatch]);

  // const getUser = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       process.env.API_URL + "/auth/login/success",
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     localStorage.setItem("studentId", data.student.id);
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("username", data.student.name);
  //     localStorage.setItem("useremail", data.student.email);
  //     setLogin(true);
  //   } catch (err) {
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  //   if (localStorage.getItem("token")) {
  //     setLogin(true);
  //   }
  // });
  const LogOut = async () => {
    localStorage.removeItem("token");
    router.push("/");
    setLogin(false);
    // window.open(`${process.env.API_URL}/auth/logout`, "_self");
  };

  useEffect(() => {
    const storedname: any = localStorage.getItem("username");
    setUserName(storedname);
    const storedemail: any = localStorage.getItem("useremail");
    setUseremail(storedemail);
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  }, []);

  const redirectFun = () => {
    localStorage.setItem("tab", "cart");
  };
  useEffect(() => {
    setCartBoolean(true);
    setCartItem(localStorage["cartItem"]);
  }, []);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/test-series", label: "Test Series" },
    { href: "/exams", label: "Exams" },
    { href: "/blogs", label: "Blogs" },
  ];
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-light bg-light "
        id="navbar-position"
      >
        <Container className="px-3">
          <Link href="/" className="imagePlace">
            <div className="logo-box">
              <Image src={LogoHeader} alt="testkart-logo" />
            </div>
          </Link>
          <div className="rightLinks">
            <div className="links-right">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
            <div className="buttons ms-2">
              {login ? (
                <>
                  <div className="dropdown d-flex justify-content-center align-items-center ms-3 cursor-pointer">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="border-none"
                      >
                        <BsFillPersonFill size={24} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="">{username}</Dropdown.Item>
                        <Dropdown.Item href="/student-profile">
                          Profile
                        </Dropdown.Item>

                        <Dropdown.Item href="/" onClick={() => LogOut()}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      primary
                      className="d-flex justify-content-center align-items-center "
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="d-flex justify-content-center align-items-center ">
                      Signup
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="custom-offcanvas">
            <button
              onClick={show ? handleClose : handleShow}
              className="menu-button"
            >
              {show ? <RiCloseLine size={34} /> : <RiMenu3Fill size={34} />}
            </button>
            <Offcanvas show={show} onHide={handleClose}>
              <Link href="/" className="image-Place">
                <div className="logo-box">
                  <Image src={LogoHeader} alt="testkart-logo" />
                </div>
              </Link>
              <div className="links-right">
                {navItems.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <span>{label}</span>
                  </Link>
                ))}
           
              </div>
              <div className="buttons ms-2">
                {login ? (
                  <>
                    <div className="dropdown d-flex align-items-center cursor-pointer">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          id="dropdown-basic"
                          className="border-none"
                        >
                          <BsFillPersonFill size={24} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="">{username}</Dropdown.Item>
                          <Dropdown.Item href="/student-profile">
                            Profile
                          </Dropdown.Item>

                          <Dropdown.Item href="/" onClick={() => LogOut()}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        primary
                        className="d-flex justify-content-center align-items-center "
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="d-flex justify-content-center align-items-center ">
                        Signup
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </Offcanvas>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MainHeader;
