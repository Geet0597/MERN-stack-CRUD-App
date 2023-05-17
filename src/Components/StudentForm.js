import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
  
const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    rollNo: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });
  
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <h5 style={{marginTop:"5px"}}>Name: </h5>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <h5 style={{marginTop:"5px"}}>Email: </h5>
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <h5 style={{marginTop:"5px"}}>Roll No.: </h5>
            <Field name="rollNo" type="number" className="form-control" />
            <ErrorMessage
              name="rollNo"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="text-center">
            <Button variant="danger" size="lg" className="mt-4"
              block="block" type="submit">
              {props.children}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;