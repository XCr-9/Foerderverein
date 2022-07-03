import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MuiTextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiButton from '@mui/material/Button';
import axios from 'axios';

export default function Attendance() {
  const [buttonContent, setButtonContent] = useState('Absenden');
  const [formDataError, setFormDataError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    attend: true,
    message: '',
  });

  const handleChange = (event) => {
    console.log('H');
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormDataError({
      name: !formData['name'] ? 'Bitte Angaben machen' : '',
    });

    if (formData['name'] && formData['attend']) {
      setButtonContent('Wird gesendet...');

      axios
        .post(`${process.env.REACT_APP_SERVER}/send-message`, formData)
        .then((res) => {
          setButtonContent('Wird gesendet...');
          alert('Nachricht wurde gesendet');
          res.data.status === 'success' && setButtonContent('Absenden');
        })
        .catch(() => {
          setButtonContent('Absenden');
        });
    }
  };

  return (
    <>
      <h2>Teilnahme zu-/absagen</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          onChange={handleChange}
          warning={formDataError.name}
        />
        {formDataError.name && <Error>{formDataError.name}</Error>}
        <RadioGroup
          aria-labelledby="Teilnahme"
          name="attend"
          onChange={handleChange}
          warning={formDataError.attend}
          defaultValue="zusage"
        >
          <FormControlLabel value="zusage" control={<Radio />} label="Zusage" />
          <FormControlLabel value="absage" control={<Radio />} label="Absage" />
        </RadioGroup>
        <TextField
          label="Nachricht"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={buttonContent === 'Wird gesendet...'}
        >
          {buttonContent}
        </Button>
      </form>
    </>
  );
}

const TextField = styled(MuiTextField)`
  width: 100%;
  max-width: 500px;
`;

const Button = styled(MuiButton)`
  &&& {
    margin-top: 20px;
    margin-bottom: 50px;
    width: auto;
    display: block;
  }
`;

const Error = styled.span`
  display: block;
  margin-bottom: 14px;
  margin-left: 10px;
  font-size: 0.8em;
  color: grey;
`;
