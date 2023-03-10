import React, { useRef } from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import emailjs from "@emailjs/browser";
import { IMaskInput } from 'react-imask';
import { useState } from "react";
import axios from 'axios';
import './ContactUs.css';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function ContactUs() {
  const form = useRef();
  const [formVision, setFormVision] = useState('');
  const [values, setValues] = useState({
    textmask: '+7(900) 000-0000'
  });

  const okMessage = 'Заявка оформлена! Подождите, пока мы вам перезвоним',
    errMessage = 'Проблемы с сервером, IT-отдел уже занялся решением. Попробуйте позднее...';

  const sendEmail = (e) => {
    e.preventDefault();
    const requestData = () => {
        setFormVision('Отправляем...')
        axios.get('http://localhost:4000/api/apiKeys')
        .then(async (response) => {

          await emailjs.sendForm(response.data.SERVICE_ID, response.data.TEMPLATE_ID, form.current, response.data.PUBLIC_KEY)
          .then((result) => {
            console.log(result);
    
            if (result.status === 200) {
              setFormVision(okMessage);
            } else {
              setFormVision(errMessage);
            }
    
          }, (error) => {
            console.log(error.text);
            setFormVision(errMessage);
          });

        })
        .catch(function (error) {
          console.log(error.toJSON());
          setFormVision(errMessage);
        })


    }
    requestData();
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
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
          <OutlinedInput
            value={values.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            size="small"
            color="success"
            fullWidth
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
            placeholder="Например, хочу установить кухню!"
            multiline
            maxRows={3}
          />
        </div>
        <Button type="submit" variant="contained" disabled = {formVision ? true : false} color="success" className="contactUs__btn">
          Заказать звонок
        </Button>
        <div style={{ 'textAlign': 'center', 'marginTop': '10px' }}>{formVision}</div>
      </Paper>
    </form>

  );
}
