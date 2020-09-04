import React, { useState, useEffect } from "react";
import classes from "./MonthCampaigns.module.scss";
import { campaignsURL } from "../../../utils/constants";
import { CampaignAd } from "../../../components";

const MonthCampaigns = () => {
	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		const fetchCampaigns = async () => {
			const resp = await fetch(campaignsURL);
			const campaigns = await resp.json();
			setCampaigns(campaigns?.data);
		};
		fetchCampaigns();
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.title}>This month campaign</div>
			{campaigns.map(campaign => (
				<CampaignAd campaign={campaign} key={campaign.id} />
			))}
		</div>
	);
};


export default MonthCampaigns;
