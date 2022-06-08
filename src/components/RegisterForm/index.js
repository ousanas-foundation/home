import React, { createRef } from 'react'
import { Form } from 'react-bootstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const RegisterForm = (props) => {
    const emailRef = createRef(undefined)
    const url = "https://gmail.us4.list-manage.com/subscribe/post?u=b3f8b38890152407562886206&amp;id=3869f0c2c3"
    return (
        <React.Fragment>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                    let response = "";
                    switch (status) {
                        case "sending":
                            response =  <div>Sending...</div>
                        case "success":
                            response =  <div>Subscribed.</div>
                        case "error":
                            response =  <div dangerouslySetInnerHTML={{ __html: message }} />
                        default: '';
                    }
                    return (
                        <Form onSubmit={(e) => {
                            event.preventDefault()
                            subscribe({
                                EMAIL: emailRef.current.value,
                            })
                        }}>
                            <Form.Control type="text" placeholder="Full Name" />
                            <Form.Control type="email" placeholder="Email Address" className={status} ref={emailRef} />
                            <Form.Control type="password" placeholder="Password" />
                            <input className="btn btn-light-red" type="submit" value={ ((status == 'sending') ? 'Request Sending...' : 'Create Account') } />
                            {response}
                        </Form>
                    )
                }}
            />
        </React.Fragment>
    )
}
export default RegisterForm