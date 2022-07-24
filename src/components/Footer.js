import React from "react";
import "./Footer.css";
import bf2 from "../assets/bg2.png"
const Footer = () => {
  return (
    <div className="mycontainer">
      <div className="image">
        <img src={bf2} alt="" width="60%" />
      </div>
      <div className="form">

      <form>
      <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputText"
          />
        </div>
      <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Roll Number
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputText"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default Footer;
