import React from 'react'
const ContactForm = () => {
    return (
        <form id="contactForm" className="" data-toggle="validator">
            <div className="contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control input-control name-email" placeholder="Name" id="name" type="text" name="name" required data-error="Please enter your name" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control input-control name-email" id="email" placeholder="Email" type="email" name="email" required data-error="Please enter your email" />  
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea id="message" className="form-control" placeholder="Message" rows="6" required data-error="Write your message"></textarea>
                    <div className="help-block with-errors"></div>
                </div>
                <button type="submit" id="submit" className="btn btn-white-shadow">Send Message</button>
                <div id="msgSubmit" className="h3 hidden text-left"></div> 
                <div className="clearfix"></div>
            </div>
        </form>		
    )
}
export default ContactForm