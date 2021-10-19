import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h2>Booking Your Appoinment</h2>
            <from onSubmit="">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Type Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <input type="submit" value="Submit" />
                <br />
                <br />
            </from>
            <br />
        </div>
    );
};

export default Contact;