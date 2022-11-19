import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const CalltoActionSection = () => {

  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    e.preventDefault()
    setFormState({...formState, [e.target.name] : e.target.value});
  } 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o7pyagt', 'template_pzfxnqc', form.current, 'WgQmv3sP-fBxrzaya')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current?.reset();
      
      const success = document.getElementById('success')
      success.style.display= 'block';

      setTimeout(() => {
        success.style.display= 'none';
      }, 4000);
      
  };

  return (
    
      <div className="subscribe-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="subscribe-head">
                <h2>Newsletter</h2>
                <p>Get tips, information & updates on your favourite products</p>
                <form className="form-section" ref={form} onSubmit={sendEmail}>
                  <input placeholder="Your Email..." name="user_email" type="email" />
                  <input value="Yes. I want!" name="subscribe" type="submit" />
                </form>
                <br />
                <div className="message">
                  <p className="success" id="success">Email Submitted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
  );
};

export default CalltoActionSection;
