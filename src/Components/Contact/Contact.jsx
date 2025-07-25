import React from 'react'
import './Contact.css'
import message from '../../assets/msg.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import rightarrow from '../../assets/right-arrow.png'

function Contact(){

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "61dee16f-f3f7-4ea5-81b3-93dcc7a8665f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();

      if (data.success) {
        console.log("Success", data);
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Network Error", error);
      setResult("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={message} alt=""/></h3>
            <p>We’d love to hear from you! Whether you’re a prospective student, parent, alumni, or visitor, feel free to reach out to us with any questions or concerns.</p>
            <ul>
                <li><img src={mail} alt="" /> admission@crescent.education</li>
                <li><img src={phone} alt="" /> +91-95432 77888(UG)</li>
                <li><img src={phone} alt="" /> +91-9953077999(PG)</li>
                <li><img src={location} alt="" /> GST Road,Vandalur,Chennai,600043</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone no" required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required/>
                <input type="hidden" name="access_key" value="61dee16f-f3f7-4ea5-81b3-93dcc7a8665f"></input>
                <button type="submit" className="btn dark-btn">Submit now<img src={rightarrow}/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact;