import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { Text } from "../../../../components";
import classes from "./TakeAction.module.scss";

const TakeAction = () => {
	return (
		<section className={classes.takeActionContainer}>
			<Link
				id='takeAction'
				className={classes.downArrow}
				to='/#takeAction'
			>
				<i className='material-icons'>expand_more</i>
			</Link>
			<div className={classes.content}>
				<article className={classes.textSection}>
					<Text type='h2' className={classes.header}>
                        We make it easy for <br />
                        anyone to take action!
					</Text>
					<Text type='p' className={classes.description}>
                        We partner with charities to show you simple, effective,
                        and impactful actions that you can take to contribute to
                        the causes that you care about, and support the great
                        work being done by charities on the front line.
					</Text>
					<Text type='p' className={classes.description}>
                        We all want to feel like we&apos;re making a difference,
                        but sometimes it can be challenging to know where to
                        start! We aim to inform, involve, and inspire you to
                        start making a difference, however you can.
					</Text>
				</article>
			</div>
		</section>
	);
};

export default TakeAction;
