import React from "react";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">
        {/* LEFT SIDE – INFO */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Have questions, feedback, or want to place an order?  
            Reach out to us using the details below or send us a message.
          </p>

          <div className="contact-detail">
            <h4>Our Location</h4>
            <p>Mama's Kitchen, Near sri sai public school, G.konduru, Vijayawada, Andhara Pradesh-521229</p>
          </div>

          <div className="contact-detail">
            <h4>Phone Number</h4>
            <p>+91 9885396888</p>
          </div>

          <div className="contact-detail">
            <h4>Email Address</h4>
            <p>mamaskitchen@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="4"
              required
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

