import { Button } from "@styles/shared.style";
import React from "react";

export default function StudentLogin() {
  return (
    <section id="login" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
            <h1>
              Test<span>Kart</span>
            </h1>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="login-card col-md-8 text-center">
                <h2 className="mb-5 text-center">Login to your dashboard</h2>
                <form className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      className="form-control mb-2"
                      placeholder="password"
                    />
                  </div>
                  <div className="col-md-12 m-0 pt-0 mb-2 d-flex justify-content-between">
                    <small>Create account</small>
                    <small>Forget password?</small>
                  </div>
                  <div className="col-md-12 mt-3 text-center">
                    <Button primary radius={0} padding="5px 40px">
                      login
                    </Button>
                  </div>
                </form>
                <hr />
                <button type="button" className="google-btn mb-5">
                  Login in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
