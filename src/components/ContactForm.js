import React from "react";

export default function ContactForm() {
  return (
    <div className="contactFormContainer">
      <div className="contactFormTitle">Contact Us:</div>
      <form>
        <div>
          <label>Your Name:</label>
          <input type="text" placeholder="Your name.." />
        </div>

        <div>
          <label>Your Email Address:</label>
          <input type="text" placeholder="Your email address.." />
        </div>

        <div>
          <label>Message:</label>
          <textarea placeholder="Write something.."></textarea>
        </div>

        <input
          className="btn"
          type="submit"
          value="Submit"
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </div>
  );
}
