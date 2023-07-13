import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    // is there a quicker way to do this? with this?
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    //for error messages
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isSubjectEmpty, setIsSubjectEmpty] = useState(false);
    const [isMessageEmpty, setIsMessageEmpty] = useState(false);


    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
      console.log("handleInpui change");
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      // Based on the input type, we set the state of either email, name, and password
      // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
        
      if (inputType === 'email') {
        setEmail(inputValue);
        setIsEmailEmpty(false);
      } else if (inputType === 'name') {
        setName(inputValue);
        setIsNameEmpty(false);
      } else if (inputType === 'subject') {
        setSubject(inputValue);
        setIsSubjectEmpty(false);
      } else if (inputType === 'message') {
        setMessage(inputValue);
        setIsMessageEmpty(false);
      } 

    };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name || !subject || !message) {
      setErrorMessage('Please review your information and try again.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrorMessage('');
    alert(`Thank you for your inquiry, ${name}! We will be in touch shortly.`);
  };

  //check if value is empty
  //use case, client clicks into input, then clicks out without typing anything
  const handleTextBlur = (e) => {
    const { value, name } = e.target;
    if(!value.trim()) {
      if (name === 'email') {
        setIsEmailEmpty(true);
      } else if (name === 'name') {
        setIsNameEmpty(true);
      } else if (name === 'subject') {
        setIsSubjectEmpty(true);
      } else if (name === 'message') {
        setIsMessageEmpty(true);
      }
    }
  }
      

  return (
    <div>
      <form className="form">
        <TextField
          label="Name"
          name='name'
          value={name}
          onChange={handleInputChange}
          onBlur={handleTextBlur}
          required
          error={isNameEmpty}
          helperText={isNameEmpty ? 'Name is required ' : ''}
          variant='outlined'
        />
        <br />
        <TextField
          label="Email"
          name='email'
          value={email}
          onChange={handleInputChange}
          onBlur={handleTextBlur}
          required
          error={isEmailEmpty}
          helperText={isEmailEmpty ? 'Email is required' : ''}
          variant='outlined'
        />
        <br />
        <TextField
          label="Subject"
          name='subject'
          value={subject}
          onChange={handleInputChange}
          onBlur={handleTextBlur}
          required
          error={isSubjectEmpty}
          helperText={isSubjectEmpty ? 'Subject is required' : ''}
          variant='outlined'
        />
        <br />
        <TextField
          label="Message"
          name='message'
          value={message}
          onChange={handleInputChange}
          onBlur={handleTextBlur}
          required
          error={isMessageEmpty}
          helperText={isMessageEmpty ? 'Message is required' : ''}
          multiline
          rows={4}
          variant='outlined'
        />
          
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form