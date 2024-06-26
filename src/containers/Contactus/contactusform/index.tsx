// ContactForm.js
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone no is required"),

  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values: any, { resetForm }: any) => {
    setSubmitted(true);
    resetForm();
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
          <Form className="contact-form card  p-4 my-3 h-auto">
          <h4 className="text-center mb-4">Contact us</h4>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              className={`form-control ${
                errors.name && touched.name ? "error-border" : ""
              }`}
              id="name"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-contact"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              className={`form-control ${
                errors.email && touched.email ? "error-border" : ""
              }`}
              id="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-contact"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field
              type="tel"
              className={`form-control ${
                errors.phone && touched.phone ? "error-border" : ""
              }`}
              id="phone"
              name="phone"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="error-contact"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              className={`form-control ${
                errors.message && touched.message ? "error-border" : ""
              }`}
              id="message"
              name="message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error-contact"
            />
          </div>
          <button type="submit" className="btn testkart-btn">
            {submitted ? "Submitted successfully" : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
