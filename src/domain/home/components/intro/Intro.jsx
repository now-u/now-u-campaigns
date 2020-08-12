import React from 'react';
import classes from './Intro.module.scss';
import { Text, Button, DownloadButtons } from '../../../../components';
// import { worldIllustration } from '../../../../assets';

const Intro = () => {
    return (
        <section className={classes.introContainer}>
            <div className={classes.content}>
                <div className={classes.textSection}>
                    <Text type='h2' className={classes.header}>
                        It&apos;s time to <br />
                        change together
                    </Text>
                    <Text type='p' className={classes.description}>
                        Download the app to discover simple, meaningful and
                        effective ways to support causes that you care about.
                    </Text>
                </div>
                <div className={classes.videoContainer}>
                    <Button
                        variant='secondary'
                        className={classes.watchVideoBtn}
                    >
                        <a
                            href='https://www.youtube.com/watch?v=h5vnFpWCOhQ'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='material-icons'>play_arrow</i>
                            Watch our video
                        </a>
                    </Button>
                </div>
                <div className={classes.downloadBtnContainer}>
                    <DownloadButtons />
                </div>
            </div>
        </section>
    );
};
// <div className={classes.introImg}>
//     <img src={worldIllustration} alt='choose direction' />
// </div>;
// const Intro = () => {
//   return (
//     <div id="home" className={classes.introContainer}>
//       <div className={classes.introContent}>
//         <div className={classes.introMesg}>
//           <Text type="h1">It&apos;s time to <br/>change together</Text>
//           <Text type="h3">
//             Download the app to discover simple, meaningful and effective ways to support
//             causes that you care about.
//           </Text>
//           <Button variant="secondary" className={classes.watchVideoBtn}>
//             <a href="https://www.youtube.com/watch?v=h5vnFpWCOhQ" target="_blank" rel="noopener noreferrer">
//               <i className="material-icons">play_arrow</i>
//               Watch our video
//             </a>
//           </Button>
//           <DownloadButtons />
//         </div>
//         <div className={classes.introImg}>
//           <img src={worldIllustration} alt="choose direction" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Intro;
