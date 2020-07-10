import React, {useState} from 'react';
import classes from './FAQ.module.scss';
import PropTypes from 'prop-types';
import { Text } from '../../../../components';

const FAQ = ( {faq: {id, question, answer}} ) => {
    const [isShow, setShow] = useState(false);

    return (
        <div key={id} className={classes.faqContainer}>
            <div className={classes.questionContainer}>
                <div className={classes.question} onClick = { () => setShow(!isShow)}>
                { isShow
                    ? <i className="material-icons"> expand_less </i>
                    : <i className="material-icons"> expand_more </i>
                }
                    <Text type='p'> {question} </Text>
                    
                </div>
            </div>

            { isShow
                ? <div className={classes.answerContainer}>
                    <div className={classes.answer}>
                        <Text type='p'> {answer} </Text>
                    </div>
                </div>
                : null
            }

            

        </div>
        
        
    );
}

FAQ.propTypes = {
    faq: PropTypes.any.isRequired,
  };

export default FAQ;