import React from 'react';
import './OnlineSupport.css'

const OnlineSupport = () => {
    return (
        <div className="suport-container">
            <h2>We Will Contact Soon</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Type Your Problem</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <br />
                <button>Submit</button>
            </div>
        </div>
    );
};

export default OnlineSupport;