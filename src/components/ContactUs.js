import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isMobile } from "react-device-detect";
import axios from "axios";

const ContactUs = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // {
  //   defaultValues: {
  //     "first-name": "",
  //     "last-name": "",
  //     email: "",
  //     phone: "",
  //   }
  // }

  

  // const onSubmit = (data) => {
  //   //prevent the browser from reloading every time the submit button is clicked
  //   sendForm("contact_form", "template_lnb4p3r", "#contact-form")
  //     .then((response) => {
  //         console.log(
  //           "SUCCESS!",
  //           response.status,
  //           response.text,
  //           contactNumber
  //         );
  //         setFadeOut(true);
  //         console.log("fadeOut: ", fadeOut);
  //       }
  //     )
  // };

  const onSubmitForm = async (formValues, event) => {
      event.preventDefault();
    setSubmit(true);

    let config = {
      method: "post",
      url: `http://localhost:3000/api/contactForm`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formValues,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.data.status === 200) {
        reset();
        console.log('Success!'); // can also add reset() here to reset the form
        setFadeOut(true);
      }
    } catch (error) {
      console.error(error);
    }

    console.log(formValues);
  };

  const onBlurHandler = (e) => {
    const inputHighlight = e.target;

    inputHighlight.style.backgroundColor = "#ff40401a";
    inputHighlight.style.borderWidth = "1px";
    inputHighlight.style.borderColor = "#ff4040";
  };
  console.log(errors);
  return (
    <section className="contactUs-section">
      {/* <img className="form-img" src={formImage} alt={formImage} /> */}
      <div
        className="parallax-img"
        alt="Quote-Image"
        style={{
          backgroundAttachment: `${isMobile ? "scroll" : "fixed"}`,
        }}
      ></div>
      <div id="contactUs-section" className="form-title">
        <h2>FREE ESTIMATES</h2>
      </div>
      <div className="form-subtitle">
        <p>SUBMIT YOUR INFORMATION TO REQUEST A FREE ESTIMATE</p>
      </div>
      <div className="form-container">
        <form
          id="contact-form"
          // onSubmit={(event) => {
          //   handleSubmit(onSubmit);
          //   setSubmit(true);
          //   event.preventDefault();
          //   event.target.reset();
          // }}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {/* <input type="hidden" name="contact_number" value={contactNumber} /> */}
          <div onBlur={onBlurHandler}>
            <input
              className="inputs"
              // name="firstName"
              type="text"
              {...register("first-name", {
                required: {
                  value: true,
                  message: "You must enter your name",
                },
              })}
              maxLength="100"
              placeholder="First Name"
            />
            {errors["first-name"] && (
              <span
                className="error-span"
                style={{
                  padding: "10px 5px 10px 5px",
                }}
              >
                {errors["first-name"].message}
              </span>
            )}
          </div>
          <div>
            <input
              className="inputs"
              // name="last-name"
              type="text"
              {...register("last-name")}
              maxLength="100"
              placeholder="Last Name"
            />
          </div>
          <div onBlur={onBlurHandler}>
            <input
              className="inputs"
              // name="email"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "You must enter a valid email",
                },
              })}
              maxLength="250"
              // required // to trigger our message I might have to comment this out/remove it
              placeholder="Email"
            />
          </div>
          <div onBlur={onBlurHandler}>
            <input
              className="inputs"
              // name="phone"
              type="tel"
              {...register("phone", {
                required: {
                  value: true,
                  pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                  message: "You must enter your phone number",
                },
              })}
              maxLength="10"
              placeholder="Phone"
            />
          </div>
          <ul>
            <li>
              {errors["email"] && (
                <span
                  className="error-span"
                  style={{
                    padding: "0px 5px 10px 5px",
                  }}
                >
                  {errors["email"].message}
                </span>
              )}
            </li>
            <li>
              {errors["phone"] && (
                <span
                  className="error-span"
                  style={{
                    padding: "0px 5px 10px 5px",
                  }}
                >
                  {errors["phone"].message}
                </span>
              )}
            </li>
          </ul>

          <div className="textArea" onBlur={onBlurHandler}>
            <textarea
              className="inputs"
              // name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "You must enter your message",
                },
              })}
              placeholder="Comments"
            ></textarea>
            {errors["message"] && (
              <span
                className="error-span"
                style={{
                  display: "flex",
                  padding: "10px 5px",
                  color: "red",
                }}
              >
                {errors["message"].message}
              </span>
            )}
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
