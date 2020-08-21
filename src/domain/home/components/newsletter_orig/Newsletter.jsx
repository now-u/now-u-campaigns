// import React, { useState } from 'react';
// import { Text, Button } from '../../../../components';
// import classes from './Newsletter.module.scss';

// const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// const Newsletter = (children) => {
//     const [formText, setFormText] = useState('');
//     const [isValid, setIsValid] = useState(false);

//     const handleChange = (event) => {
//         setFormText(event.target.value.trim());
//         setIsValid(emailRegex.test(formText));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setFormText('');
//         setIsValid(false);
//     };

//     return (
//         <section className={classes.newsletterContainer}>{children}</section>
//     );
// };

// export default Newsletter;
