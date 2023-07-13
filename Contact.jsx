import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to our customer support team:</p>
      <ul>
        <li>Email: info@flightbookingapp.com</li>
        <li>Phone: +1-123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      <p>We are available to help you from Monday to Friday, 9:00 AM to 6:00 PM (local time).</p>
      <p>Alternatively, you can fill out the form below, and we will get back to you as soon as possible:</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
