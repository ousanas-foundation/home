import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"


const WidgetSubscribe = (props) => {
    const emailRef = createRef(undefined)
    const url = "https://gmail.us4.list-manage.com/subscribe/post?u=b3f8b38890152407562886206&amp;id=3869f0c2c3"
    return(
        <div className="widget widget-subscribe">
            <h3 className="footer-title">{props.title}</h3>
            <p className="content">{props.content}</p>
            <div className="footer-search">
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
                            <form
                                onSubmit={() => {
                                    event.preventDefault()

                                    subscribe({
                                        EMAIL: emailRef.current.value,
                                    })
                                }}
                            >
                                <div className="form-group">
                                    <div className="input-group">
                                        
                                        <input type="email" className="form-control" placeholder="Your Email Address" ref={emailRef} />
                                        <div className="input-group-append">
                                            <input id="coinage-subscribe" type="submit" value="Subscribe" />
                                        </div>
                                    </div>
                                    <p className="notice">
                                        {
                                            response  
                                        }
                                    </p>
                                </div>

                            </form>
                        )
                    }}
                />
            </div>
        </div>
    )
}
export default WidgetSubscribe