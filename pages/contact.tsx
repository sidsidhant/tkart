import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import AlertPopup from "src/newComponents/alerts";
import { _request } from "src/utils/request.util";
import * as Yup from "yup";

const Contact = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  // const postApiCall = async (jsonData: any) => {
  //   const response = await _request("post", `contact`, jsonData);
  //   if (!response.success) {
  //     setErrorMsgShow(true);
  //     setErrorMsg(response.error);
  //   }
  // };
  const postApiCall = async (jsonData: any) => {
    try {
      const response = await _request("post", `contact`, jsonData);
      if (response.success) {
        setSuccessMsg("Our team will reach you shortly");
        setErrorMsg(""); // Clear any previous error message
      } else {
        setErrorMsg(response.error);
        setSuccessMsg(""); // Clear any previous success message
      }
      setAlertVisible(true);
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Enter your email"),
    name: Yup.string().required("Enter your name"),
    phone_number: Yup.string().required("Enter your phone number"),
    institute_name: Yup.string().required("Enter your institute name"),
    message: Yup.string().required("Write your queries"),
  });
  useEffect(() => {
    // Hide the alert after a certain duration (e.g., 5000 milliseconds)
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [alertVisible]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      institute_name: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      postApiCall(values);
    },
  });
  return (
    <div style={{ margin: "50px 0 0 0" }}>
      <form
        method="post"
        className="wpcf7-form init"
        aria-label="Contact form"
        data-status="init"
        onSubmit={formik.handleSubmit}
      >
        <div className="contact-queries">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Name</label>
                <span className="wpcf7-form-control-wrap" data-name="name">
                  <input
                    size={40}
                    className={`form-control ${
                      formik.errors.name && formik.touched.name
                        ? "error-input"
                        : ""
                    }`}
                    aria-required="true"
                    aria-invalid="false"
                    type="text"
                    style={{ backgroundColor: "white" }}
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <p
                      className="text-sm  mt-2"
                      style={{ color: "#d33d33", display: "flex" }}
                    >
                      {formik.errors.name}
                    </p>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Phone Number</label>
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="phone_number"
                >
                  <input
                    size={40}
                    className={`form-control ${
                      formik.errors.phone_number && formik.touched.phone_number
                        ? "error-input"
                        : ""
                    }`}
                    aria-invalid="false"
                    type="tel"
                    style={{ backgroundColor: "white" }}
                    name="phone_number"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                  />
                  {formik.errors.phone_number && formik.touched.phone_number ? (
                    <p
                      className="text-sm  mt-2"
                      style={{ color: "#d33d33", display: "flex" }}
                    >
                      {formik.errors.phone_number}
                    </p>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label ">Email </label>
                <span className="wpcf7-form-control-wrap" data-name="email">
                  <input
                    size={40}
                    className={`form-control ${
                      formik.errors.email && formik.touched.email
                        ? "error-input"
                        : ""
                    }`}
                    aria-required="true"
                    aria-invalid="false"
                    name="email"
                    style={{ backgroundColor: "white" }}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p
                      className="text-sm  mt-2"
                      style={{ color: "#d33d33", display: "flex" }}
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label ">Institute Name </label>
                <span className="wpcf7-form-control-wrap" data-name="email">
                  <input
                    size={40}
                    className={`form-control ${
                      formik.errors.institute_name &&
                      formik.touched.institute_name
                        ? "error-input"
                        : ""
                    }`}
                    aria-required="true"
                    style={{ backgroundColor: "white" }}
                    aria-invalid="false"
                    name="institute_name"
                    onChange={formik.handleChange}
                    value={formik.values.institute_name}
                  />
                  {formik.errors.institute_name &&
                  formik.touched.institute_name ? (
                    <p
                      className="text-sm  mt-2"
                      style={{ color: "#d33d33", display: "flex" }}
                    >
                      {formik.errors.institute_name}
                    </p>
                  ) : null}
                </span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Message</label>
            <span className="wpcf7-form-control-wrap" data-name="message">
              <textarea
                cols={40}
                rows={3}
                className={`form-control ${
                  formik.errors.message && formik.touched.message
                    ? "error-input"
                    : ""
                }`}
                aria-invalid="false"
                name="message"
                style={{ backgroundColor: "white", height: "125px" }}
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.errors.message && formik.touched.message ? (
                <p
                  className="text-sm  mt-2"
                  style={{ color: "#d33d33", display: "flex" }}
                >
                  {formik.errors.message}
                </p>
              ) : null}
            </span>
          </div>
          {/* {errorMsgShow && (
            <p
              className="text-sm  mt-2"
              style={{ color: "#d33d33", display: "flex" }}
            >
              {errorMsg}
            </p>
          )} */}
          <div className="form-group mb-0 trial_box">
            <input
              className="wpcf7-form-control has-spinner wpcf7-submit btn thm-btn "
              type="submit"
              value="Send Message"
            />
          </div>
        </div>
        <div className="wpcf7-response-output" aria-hidden="true"></div>
        {alertVisible && (
          <AlertPopup
            color={successMsg ? "success" : "danger"}
            message={successMsg || errorMsg}
            onClose={() => setAlertVisible(false)}
          />
        )}
      </form>
    </div>
  );
};

export default Contact;
