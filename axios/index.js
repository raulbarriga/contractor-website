import axios from "axios";

// development server url:
// using only the Next.js server
const url = "http://localhost:3000/api/contactForm";
// deployment server url:
// const url = "https://jbb-contractor.herokuapp.com/api/contactForm";


export const sendForm = async (contactData) => {
    try {
        const response = await axios.post(url, contactData);
        if (response.data.status === 200) {
            // console.log("frontend: ", response);
        
          console.log('Success!'); // can also add reset() here to reset the form
          console.log('response: ', response); // can also add reset() here to reset the form
        return response;
        }
      } catch (error) {
        console.log("error.response: ", error.response);
        return error.response;
      }
  };