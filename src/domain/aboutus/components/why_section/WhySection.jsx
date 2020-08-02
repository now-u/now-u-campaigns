import React from 'react';
import classes from './WhySection.module.scss';
import { Text } from '../../../../components';
// import { ourStoryImg } from '../../../../assets';

const WhySection = () => {
    return (
        <section className={classes.whySection}>
            <div className={classes.content}>
                <Text type='h2' className={classes.header}>
                    Our story
                </Text>
                <Text type='p' className={classes.description}>
                    now-u was founded in April of 2020, inspired by the acts of
                    kindness and solidarity that we saw in our communities
                    during the Covid-19 lockdown. We noticed that many people
                    wanted to do something to help others during these difficult
                    times but didn&apos;t know what they could do, while at the
                    same time, charities were doing amazing work and in
                    desperate need of support.
                </Text>
                <Text type='p' className={classes.description}>
                    We decided to create a platform to empower anyone to help
                    tackle the causes they care about and support the charities
                    working on the front lines of global issues.
                </Text>
                <Text type='p' className={classes.description}>
                    The global lockdown has offered us an opportunity to take
                    stock of what&apos;s really important to us, and a chance to
                    move forward together instead of falling &lsquo;back to
                    normal&rsquo;. We believe that each of us has the power to
                    create lasting and sustainable change together. now u!
                </Text>
            </div>
        </section>
    );
    // return (
    //     <div className={classes.whySection}>
    //         <div className={classes.image}>
    //             <img src={ourStoryImg} alt="Road Sign" />
    //         </div>
    //         <div className={classes.content}>
    //             <div className={classes.header}>
    //                 <Text type="h3" className={classes.headerText}>
    //                     Our Story
    //                 </Text>
    //             </div>
    //             <div className={classes.section}>
    //                 <Text type="p" className={classes.sectionText}>
    //                     now-u was founded in lockdown, inspired by the acts of kindness and solidarity that we saw in our communities. We noticed that many people wanted to do something to help others during these difficult times but didn’t know what they could do, while at the same time there were charities doing amazing work that were in desperate need of support.
    //                     <br/><br/>
    //                     We decided to create a platform to empower anyone to help tackle causes they care about, and support the charities working on the front lines of global issues.
    //                 </Text>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default WhySection;
