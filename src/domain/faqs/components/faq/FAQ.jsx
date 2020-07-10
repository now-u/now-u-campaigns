import React from 'react';
import classes from './FAQ.module.scss';
import PropTypes from 'prop-types';
import { Text } from '../../../../components';

const FAQ = ( {faq: {id, question, answer}} ) => {

    return (
        <div key={id} className={classes.faqContainer}>
            <div className={classes.questionContainer}>
                <div className={classes.question}>
                    <i className="material-icons">
                        expand_more
                    </i>
                    <Text type='p'> {question} </Text>
                    
                </div>
            </div>

            <div className={classes.answerContainer}>
                <div className={classes.answer}>
                    <Text type='p'> {answer} </Text>
                </div>
            </div>

        </div>
        
        
    );
}

FAQ.propTypes = {
    faq: PropTypes.any.isRequired,
  };

export default FAQ;