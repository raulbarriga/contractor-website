import axios from "axios";

// development server url:
// const url = "http://localhost:8000/api/contactForm";
// deployment server url:
const url = "https://jbb-contractor.herokuapp.com/api/contactForm";


export const sendForm = async (contactData) => {
    try {
        const response = await axios.post(url, contactData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.data.status === 200) {
            // console.log("frontend: ", response);
        
          console.log('Success!'); // can also add reset() here to reset the form
          console.log('response: ', response); // can also add reset() here to reset the form
        return response;
        }
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
  
    //   console.log(contactData);
  };