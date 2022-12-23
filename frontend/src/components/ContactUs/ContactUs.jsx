import React, { useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import emailjs from "@emailjs/browser";
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import axios from 'axios';
import './ContactUs.css';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default function ContactUs() {
  const form = useRef();
  const [apiKeys, setApiKeys] = useState({});
 
  useEffect(() => {
    async function fetchData(){
       await axios.get('http://localhost:4000/api/apiKeys')
      .then((response) => {
        setApiKeys(response.data);
      })}
      fetchData();
  }, []);

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
      <Paper elevation={3} className="contactUs__box">
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
        />
      </div>
      <div className="contactUs__num">
      <p>Мы никогда не станем использовать ваш номер для смс рассылок</p>
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          color="success"
          name="user_tel"
          size="small"
          label="Номер телефона:"
          variant="outlined"
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
          maxRows={3}
        />
      </div>
      <Button variant="contained" color="success" className="contactUs__btn">
        <input type="submit" value="Заказать звонок" />
      </Button>
      </Paper>
    </form>
  );
}
