import { useState } from 'react';



const JoinWaitlistForm=({ status, message, onValidated })=>{

    const [email, setEmail] = useState("");
    const [buttonColor, setButtonColor] = useState("rgba(249, 70, 28, 0.5)");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (isValidEmail(event.target.value)) {
            setButtonColor("#F9461C");
        } else {
            setButtonColor("rgba(249, 70, 28, 0.5)");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        email && email.indexOf("@") > -1 &&
        onValidated({
            MERGE0: email,
        });
        setEmail('');
      };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return(
        <>
            <div className="input-group waitlist-input">
                <form onSubmit={handleSubmit} className='waitlist-form mc__form'>
                    <input
                        type="email"
                        className="form-control font-paragraphs get-updates-field-input-waitlist "
                        placeholder="Enter your email to join waitlist "
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        className="waitlist-submit-btn font-paragraphs"
                        id="basic-addon2"
                        type="submit"
                        style={{ backgroundColor: buttonColor }}
                    >Join now</button>
                </form>
                {status === "success" && (
                    <div
                        className="mc__alert mc__alert--success "
                        dangerouslySetInnerHTML={{ __html: message }}
                        style={{marginTop:"2.5rem", fontFamily:"Nunito", fontSize:"24px"}}
                    />
                )}
            </div>
        </>
    )
}

export default JoinWaitlistForm;