import React from "react";
import "./FooterPage.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      style={{ border: "0" }}
      color="blue"
      className="font-small pt-4 mt-4 footer"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6"></MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <span
                    className="iconify-inline"
                    data-icon="ion-social-pinterest"
                  ></span>
                </a>
              </li>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <span
                    className="iconify-inline"
                    data-icon="ion-social-facebook"
                  ></span>
                </a>
              </li>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <span
                    className="iconify-inline"
                    data-icon="ion-social-twitter"
                  ></span>
                </a>
              </li>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <span
                    className="iconify-inline"
                    data-icon="ion-social-instagram"
                  ></span>
                </a>
              </li>
            </ul>
            <ul>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <p>About Us</p>
                </a>
              </li>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <p>iOS</p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  <p>Android</p>
                </a>
              </li>
              <li className="list-unstyled">
                <a className="a" href="#!">
                  <p>Blog</p>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}{" "}
          <p>Copyright by Cookit. All rights reserved.</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
