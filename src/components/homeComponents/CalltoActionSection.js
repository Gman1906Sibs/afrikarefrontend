import React, { useState } from "react";

const CalltoActionSection = () => {

  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({...formState, [e.target.name] : e.target.value});
  } 

  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Newsletter</h2>
              <p>Get tips, information & updates on your favourite products</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email"  onChange={changeHandler} />
                <input value="Yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
