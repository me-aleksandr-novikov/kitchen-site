import React, { useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import axios from 'axios';
import './ContactUs.css';

function ContactUs() {
  const form = useRef();
  const [apiKeys, setApiKeys] = useState({});

  useEffect(() => {
    axios.get('http://localhost:4000/api/apiKeys')
      .then((response) => {
        setApiKeys(response.data);
      })
  }, []);

  console.log(apiKeys);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, form.current, apiKeys.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form className="contactUs" ref={form} onSubmit={sendEmail}>
      <button style={{}}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="50" height="50"
          viewBox="0 0 50 50">
          <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
        </svg>
      </button>
      <h3 className="contactUs__title">Оставьте заявку,<br /> мы скоро с вами свяжемся!</h3>
      <div className="contactUs__name">
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          color="success"
          margin="normal"
          name="user_name"
          size="small"
          label="Ваше имя:"
          multiline
          maxRows={4}
        />
      </div>
      <div className="contactUs__num">
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          color="success"
          margin="normal"
          name="user_tel"
          size="small"
          label="Номер телефона:"
          multiline
          maxRows={4}
        />
      </div>
      <div className="contactUs__mess">
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          color="success"
          margin="normal"
          name="message"
          label="Сообщение:"
          multiline
          maxRows={4}
        />
      </div>
      <Button variant="contained" color="success" className="contactUs__btn">
        <input type="submit" value="Заказать звонок" />
      </Button>

    </form>
  );
}

export default ContactUs;