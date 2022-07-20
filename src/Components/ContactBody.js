import React, { Component } from "react";
import '../SCSS/ContactBody.scss'

export default class Contact extends Component {
  // Implement a form validation for the contact form
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }
  validate(event) {

    event.preventDefault();
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

    var text;
    if (fName.length < 2) {
      text = "Please Enter First Name";
      error_message.innerHTML = text;
      return false;
    }
    if (lName.length < 1) {
      text = "Please Enter Last Name";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 10) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    this.form.submit();
    return true;
  }


  // Using the method getElementById() returns an element object representing the ID property.
  // You can use querySelector() to find the element using any selector. No ID.
  // The indexOf() method returns the position of the first occurrence of a specified value in a string.

  render() {
    return (
      <div>
        <main id="contact__container">
          <form ref={(form => this.form = form)} onSubmit={this.validate}>
            <label for="fname">First Name</label>
            <input className="form__box" type="text" id="fname" name="firstname" placeholder="Please put your first name here." />

            <label for="lname">Last Name</label>
            <input className="form__box" type="text" id="lname" name="lastname" placeholder="Please put your last name here." />

            <label for="email">Email Address</label>
            <input className="form__box" type="text" id="email" name="email" placeholder="Please put your email here." />

            <label for="comments">Message Us<i style={{ color: "grey" }}>(Optional)</i></label>
            <textarea className="form__box" id="comments" name="comments" placeholder="Please put write here for any concerns or questions here."></textarea>

            <input className="submit__button" type="submit" value="Submit" />
          </form>
          <div id="error_message"></div>
        </main>
      </div >
    );
  };

};