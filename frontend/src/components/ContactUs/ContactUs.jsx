import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import axios from 'axios';
import './ContactUs.css';

function ContactUs() {
  const form = useRef();
  const [apiKeys, setApiKeys] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:4000/api/apiKeys')
      .then((response) => {
        setApiKeys(response.data);
      })
  },[]);

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactUs;