import React from "react";
import { Text, DownloadButtons } from "../../../../components";
import { chooseCause, seeImpact, takeAction } from "../../../../assets";
import classes from "./HowItWorks.module.scss";

const HomeItWorks = () => {
	return (
		<section className={classes.howItWorksContainer}>
			<Text type='h2'>How it works</Text>

			<div className={classes.stepContainer}>
				<article className={classes.textSection}>
					<span
						id={classes.fadedNumberOne}
						className={classes.fadedNumber}
					></span>
					<Text type='h3' className={classes.header}>
                        Join a campaign
					</Text>
					<Text type='p' className={classes.description}>
                        Our targeted monthly campaigns highlight a range of
                        social and environmental issues, locally and around the
                        world. Join as many as you like!
					</Text>
				</article>
				<figure className={classes.imageSection}>
					<img src={chooseCause} alt='Choose your cause' />
				</figure>
			</div>
			<div className={classes.stepContainer}>
				<figure className={classes.imageSection}>
					<img src={takeAction} alt='Take action' />
				</figure>
				<article className={classes.textSection}>
					<span
						id={classes.fadedNumberTwo}
						className={classes.fadedNumber}
					></span>
					<Text type='h3' className={classes.header}>
                        Take action
					</Text>
					<Text type='p' className={classes.description}>
                        Whether you have five minutes in the morning, or want to
                        dedicate more time to your chosen cause, discover
                        effective and meaningful ways to take action!
					</Text>
				</article>
				<span className={classes.backgroundShape}></span>
			</div>
			<div className={classes.stepContainer}>
				<article className={classes.textSection}>
					<span
						id={classes.fadedNumberThree}
						className={classes.fadedNumber}
					></span>
					<Text type='h3' className={classes.header}>
                        Join the now-u community!
					</Text>
					<Text type='p' className={classes.description}>
                        Join a community of changemakers, connect with fellow
                        campaign contributors, and see how your actions make a
                        difference.
					</Text>
				</article>
				<figure className={classes.imageSection}>
					<img src={seeImpact} alt='See your impact' />
				</figure>
			</div>
			<div className={classes.cta}>
				<Text type='h3'>Get started now</Text>
				<div className={classes.downloadBtnContainer}>
					<DownloadButtons />
				</div>
			</div>
		</section>
	);
};

export default HomeItWorks;
