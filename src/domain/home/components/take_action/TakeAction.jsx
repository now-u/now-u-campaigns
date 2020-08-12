import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Text } from '../../../../components';
// import {
//     chooseCause,
//     seeImpact,
//     takeAction,
//     step1,
//     step2,
//     step3,
// } from '../../../../assets';
import classes from './TakeAction.module.scss';

const TakeAction = () => {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className={classes.takeActionContainer}>
            <Link
                className={classes.downArrow}
                scroll={(el) => scrollWithOffset(el, 100)}
                to='/#action-msg'
            >
                <i className='material-icons'>expand_more</i>
            </Link>
            <div className={classes.content}>
                <div className={classes.textSection}>
                    <Text type='h2' className={classes.header}>
                        We make it easy for anyone to take action!
                    </Text>
                    <Text type='p' className={classes.description}>
                        We partner with charities to show you simple, effective
                        and impactful actions that you can take to contribute to
                        the causes that you care about, and support the great
                        work being done by charities on the front line.
                    </Text>
                    <Text type='p' className={classes.description}>
                        We all want to feel like we’re making a difference, but
                        sometimes it can be difficult to know where to start!
                        Our aim is to inform, involve and inspire you to start
                        making a difference, however you can.
                    </Text>
                </div>
            </div>
        </section>

        // <>
        //     <div className={classes.actionMesgContainer}>
        //         <Link
        //             className={classes.downArrow}
        //             scroll={(el) => scrollWithOffset(el, 100)}
        //             to='/#action-msg'
        //         >
        //             <i className='material-icons'>expand_more</i>
        //         </Link>
        //         <div id='action-msg' className={classes.actionMesg}>
        //             <Text type='h1'>
        //                 We make it easy for anyone to take action!
        //             </Text>
        //             <Text type='p'>
        //                 We partner with charities to show you simple, effective
        //                 and impactful actions that you can take to contribute to
        //                 the causes that you care about, and support the great
        //                 work being done by charities on the front line.
        //             </Text>
        //             <Text type='p'>
        //                 We all want to feel like we’re making a difference, but
        //                 sometimes it can be difficult to know where to start!
        //                 Our aim is to inform, involve and inspire you to start
        //                 making a difference, however you can.
        //             </Text>
        //         </div>
        //     </div>
        //     <div className={classes.processContainer}>
        //         <Text type='h1'>How it works</Text>
        //         <div className={classes.stepContainer}>
        //             <div className={classes.stepContent}>
        //                 <div className={classes.stepDetails}>
        //                     <img
        //                         className={classes.stepBackground}
        //                         src={step1}
        //                         alt='step number'
        //                     />
        //                     <Text type='h3'>Join a campaign</Text>
        //                     <Text type='p'>
        //                         Our targeted monthly campaigns highlight a range
        //                         of social and environmental issues, locally and
        //                         around the world. Join as many as you like!
        //                     </Text>
        //                 </div>
        //                 <div className={classes.stepImg}>
        //                     <img src={chooseCause} alt='Choose your cause' />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={classes.stepContainer}>
        //             <div className={classes.stepContent}>
        //                 <div className={classes.stepImg}>
        //                     <img src={takeAction} alt='Take action' />
        //                 </div>
        //                 <div className={classes.stepDetails}>
        //                     <img
        //                         className={classes.stepBackground}
        //                         src={step2}
        //                         alt='step number'
        //                     />
        //                     <Text type='h3'>Take action</Text>
        //                     <Text type='p'>
        //                         Whether you have five minutes in the morning, or
        //                         want to dedicate more time to your chosen cause,
        //                         discover effective and meaningful ways to take
        //                         action!
        //                     </Text>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={classes.stepContainer}>
        //             <div className={classes.stepContent}>
        //                 <div className={classes.stepDetails}>
        //                     <img
        //                         className={classes.stepBackground}
        //                         src={step3}
        //                         alt='step number'
        //                     />
        //                     <Text type='h3'>Join the now-u community!</Text>
        //                     <Text type='p'>
        //                         Join a community of changemakers, connect with
        //                         fellow campaign contributors, and see how your
        //                         actions are making a difference.
        //                     </Text>
        //                 </div>
        //                 <div className={classes.stepImg}>
        //                     <img src={seeImpact} alt='See your impact' />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={classes.cta}>
        //             <Text type='h3'>Get started now</Text>
        //             <DownloadButtons />
        //         </div>
        //     </div>
        // </>
    );
};

export default TakeAction;
