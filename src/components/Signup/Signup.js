import axios from "axios";
import { useState } from "react";
// import { resolveTo } from 'react-router/lib/router';
import {
  alphabetValidationMessage,
  emailValidationMessage,
} from "../../helper/constant";
import { alphabetValidation, emailValidation } from "../../helper/validation";
import "./Signup.css";

export default function Signup() {
  const [isFormValid, setIsFormValid] = useState(true);

  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // const validateInputs = () => {
  //     if(!alphabetValidation(user.firstName)){
  //         setValidationMessage({
  //             ...validationMessage,
  //             firstName: alphabetValidationMessage,
  //         })
  //         setIsFormValid(false);
  //     } else {
  //         setValidationMessage({
  //             ...validationMessage,
  //             firstName: "",
  //         })
  //     }

  //     if(!alphabetValidation(user.lastName)){
  //         setValidationMessage({
  //             ...validationMessage,
  //             lastName: alphabetValidationMessage,
  //         })
  //         setIsFormValid(false);
  //     } else {
  //         setValidationMessage({
  //             ...validationMessage,
  //             lastName: "",
  //         })
  //     }

  //     if(!emailValidation(user.email)){
  //         setValidationMessage({
  //             ...validationMessage,
  //             email: emailValidationMessage,
  //         })
  //         setIsFormValid(false);
  //     } else {
  //         setValidationMessage({
  //             ...validationMessage,
  //             email: "",
  //         })
  //     }

  //     if(!alphabetValidation(user.password)){
  //         setValidationMessage({
  //             ...validationMessage,
  //             password: alphabetValidationMessage,
  //         })
  //         setIsFormValid(false);
  //     } else {
  //         setValidationMessage({
  //             ...validationMessage,
  //             password: "",
  //         })
  //     }
  // }

  const cleanUp = () => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setValidationMessage({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!alphabetValidation(user.firstName)) {
      setValidationMessage({
        ...validationMessage,
        firstName: alphabetValidationMessage,
      });
      setIsFormValid(false);
    } else {
      setValidationMessage({
        ...validationMessage,
        firstName: "",
      });
    }

    if (!alphabetValidation(user.lastName)) {
      setValidationMessage({
        ...validationMessage,
        lastName: alphabetValidationMessage,
      });
      setIsFormValid(false);
    } else {
      setValidationMessage({
        ...validationMessage,
        lastName: "",
      });
    }

    if (!emailValidation(user.email)) {
      setValidationMessage({
        ...validationMessage,
        email: emailValidationMessage,
      });
      setIsFormValid(false);
    } else {
      setValidationMessage({
        ...validationMessage,
        email: "",
      });
    }

    if (!alphabetValidation(user.password)) {
      setValidationMessage({
        ...validationMessage,
        password: alphabetValidationMessage,
      });
      setIsFormValid(false);
    } else {
      setValidationMessage({
        ...validationMessage,
        password: "",
      });
    }

    if (!isFormValid) return;

    axios
      .post("http://localhost:3000/users", user)
      .then((response) => {
        alert(
          `dear ${response.data.firstName}, you signed up successfully. Please use your mail ${response.data.email} as your user name.`
        );
      })
      .catch((error) => {
        console.error("Exception occurred - " + error);
      });
    cleanUp();
  };

  return (
    <div className="container">
      <div className="row" id="formSignUp">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div className="form-group">
              <label for="inputBookId">First Name</label>
              <input
                value={user.firstName}
                onChange={onChangeHandler}
                // onBlur={validateInputs}
                name="firstName"
                type="text"
                className="form-control"
                id="inputBookId"
                placeholder="First Name"
              />
              <div name="firstNameValidation" className="text-danger">
                {validationMessage.firstName}
              </div>
            </div>
            <div className="form-group">
              <label for="inputBookTitle">Last Name</label>
              <input
                value={user.lastName}
                onChange={onChangeHandler}
                // onBlur={validateInputs}
                name="lastName"
                type="text"
                className="form-control"
                id="inputBookTitle"
                placeholder="Last Name"
              />
              <div name="lastNameValidation" className="text-danger">
                {validationMessage.lastName}
              </div>
            </div>
            <div className="form-group">
              <label for="Book Desc">Email address</label>
              <input
                value={user.email}
                onChange={onChangeHandler}
                // onBlur={validateInputs}
                name="email"
                type="email"
                className="form-control"
                id="Book Desc"
                placeholder="Enter email"
              />
              <div name="emailValidation" className="text-danger">
                {validationMessage.email}
              </div>
            </div>
            <div className="form-group">
              <label for="Author Name">Password</label>
              <input
                value={user.password}
                onChange={onChangeHandler}
                // onBlur={validateInputs}
                name="password"
                type="password"
                className="form-control"
                id="Author Name"
                placeholder="Password"
              />
              <div name="passwordValidation" className="text-danger">
                {validationMessage.password}
              </div>
            </div>
            <button
              type="submit"
              onClick={onSubmitHandler}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
