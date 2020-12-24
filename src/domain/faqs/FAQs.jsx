import React, { useEffect, useState }from "react";
import classes from "./FAQs.module.scss";
import { Text } from "../../components";
import { faq } from "../../assets";
import { Faq } from "./components";
import { faqsURL } from "../../utils/constants";

const FAQs = () => {
  const [faqs, setFAQs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      const resp = await fetch(faqsURL);
      const faqs = await resp.json();
      setFAQs(faqs?.data);
    };

    fetchFAQs();
  }, []);

  return (
    <div className={classes.faqsContainer}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <Text type="h2" className={classes.headingText}>Frequently asked questions</Text>
        </div>
      </div>

            

      <div className={classes.faqsContentContainer}>
        <div className={classes.faqsImage}>
          <img src={faq} alt="FAQs" />
        </div>

        <div className={classes.faqsContent}>
          {faqs.map((faq) => 
            <Faq key={faq.id} faq={faq}></Faq>
          )}
                       
        </div>

        <div className={classes.faqsText}>
          <Text type="p">Want to ask something else? <span>Get in touch :)</span></Text>
        </div>
                
      </div>
        
    </div>
        
        
  );
};


export default FAQs;