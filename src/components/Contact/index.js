import React from 'react'
import './index.css'

const Contact = () => {
    return (
        <div className="contactcontent-main-container">
            <div className="contact-main-div">
                <div>
                    <h2 className='contact-main-contact-head'>Contact</h2>
                    <p className='contact-main-contact-para'>Use the form below to inquire about availability, potential collaborations, or just to say hi.</p>
                </div>
                <div class="contact-main-div-inputs">
                    <div className="contact-inputs-div">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder='Message'>

                        </textarea>
                    </div>
                </div>
                <button className="contact-send-message-button">Send Message</button>
            </div>
        </div>
    )
}

export default Contact