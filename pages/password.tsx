import React from "react";

const Password = () => {
  return (
    <div className="container">
      <div className="checkout-form personal-address">
        <div className="personal-info-head">
          <h4>Change Password</h4>
          <p>
            We will email you a confirmation when changing your password, so
            please expect that email after submitting.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form action="/">
              <div className="form-group">
                <label className="form-control-label">Current password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-control-label">Password</label>
                <div className="pass-group" id="passwordInput">
                  <input
                    type="password"
                    className="form-control pass-input"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="password-strength" id="passwordStrength">
                  <span id="poor"></span>
                  <span id="weak"></span>
                  <span id="strong"></span>
                  <span id="heavy"></span>
                </div>
                <div id="passwordInfo"></div>
              </div>
              <div className="form-group">
                <label className="form-control-label">
                  Confirm New Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="update-profile save-password">
                <button type="button" className="btn btn-primary">
                  Save Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
