import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { isMobile } from "react-device-detect";


const ContactUs = () => {
  init("user_ZNljYlzkMvUQiI926og3B");

  const [fadeOut, setFadeOut] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "first-name": "",
      "last-name": "",
      email: "",
      phone: "",
    },
  });
  const [contactNumber, setContactNumber] = useState("000000");
  const [submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    //prevent the browser from reloading every time the submit button is clicked

    //generateContactNumber();
    //   const templateParams = {
    //     contactNumber: contactNumber
    // };
    //console.log(templateParams)

    //serviceID: contact_form, templateID: template_lnb4p3r, form: #contact-form,
    sendForm("contact_form", "template_lnb4p3r", "#contact-form")
      .then((response) => {
          console.log(
            "SUCCESS!",
            response.status,
            response.text,
            contactNumber
          );
          setFadeOut(true);
          console.log("fadeOut: ", fadeOut);
        }
      )
      .catch((error) => {
          console.log("FAILED...", error);
        });
  };

  const onBlurHandler = (e) => {
    const inputHighlight = e.target;

    inputHighlight.style.backgroundColor = "#ff40401a";
    inputHighlight.style.borderWidth = "1px";
    inputHighlight.style.borderColor = "#ff4040";
  };

  

  return (
    <section id="contactUs-section" className="contactUs-section">
      {/* <img className="form-img" src={formImage} alt={formImage} /> */}
      <div className="parallax-img" alt="Quote-Image"
      style={{
        backgroundAttachment: `${isMobile ? "scroll" : "fixed"}`
      
      }}
      ></div>
      <div className="form-title">
        <h2>FREE ESTIMATES</h2>
      </div>
      <div className="form-subtitle">
        <p>SUBMIT YOUR INFORMATION TO REQUEST A FREE ESTIMATE</p>
      </div>
      <div className="form-container">
        <form
          id="contact-form"
          onSubmit={(event) => {
            handleSubmit(onSubmit);
            setSubmit(true);
            event.preventDefault();
            event.target.reset();
          }}
        >
          <input type="hidden" name="contact_number" value={contactNumber} />
          <div>
            <input
              className="inputs"
              name="first-name"
              type="text"
              {...register("first-name")}
              maxLength="100"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="inputs"
              name="last-name"
              type="text"
              {...register("last-name")}
              maxLength="100"
              placeholder="Last Name"
            />
          </div>
          <div onBlur={onBlurHandler}>
            <input
              className="inputs"
              name="email"
              type="email"
              {...register("email", {
                required: true,
              })}
              maxLength="250"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="inputs"
              name="phone"
              type="tel"
              {...register("phone")}
              maxLength="50"
              placeholder="Phone"
            />
          </div>
          <div className="textArea">
            <textarea
              className="inputs"
              name="message"
              {...register("message")}
              placeholder="Comments"
            ></textarea>
          </div>

          {submit === false && (
            <div className="btn">
              <button type="submit" value="Send">
                SUBMIT
              </button>
            </div>
          )}

          {submit && (
            <div
              className={fadeOut ? "btn-msg fadeOut" : "btn-msg"}
              onAnimationEnd={() => {
                console.log("Animation ended");
                setFadeOut(false);
                console.log("fadeOut: ", fadeOut);
              }}
            >
              <p>Thanks for submitting!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
