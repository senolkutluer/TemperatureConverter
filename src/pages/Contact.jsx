import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-5">
          <h3>How can we help you ?</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center mx-">
            We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out to us using the contact form below. Our team is here to help and will get back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Forward</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
