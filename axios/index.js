import axios from "axios";

let url = "";
process.env.NODE_ENV === 'development' ? (url = "http://localhost:3000/api/contactForm") : process.env.NODE_ENV === 'production' ? (url = "https://tio-jorge-website.vercel.app/api/contactForm") : console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

export const sendForm = async (contactData) => {
    try {
        const response = await axios.post(url, contactData);
        if (response.data.status === 200) {
        return response;
        }
      } catch (error) {
        console.log("error.response: ", error.response);
        return error.response;
      }
  };