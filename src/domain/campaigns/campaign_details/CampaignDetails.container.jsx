import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { campaignsURL } from "../../../utils/constants";
import Campaign from "./CampaignDetails.component";

const CampaignContainer = () => {
  const { params } = useRouteMatch();
  const history = useHistory();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const resp = await fetch(`${campaignsURL}/${params.id}`);
        const campaign = await resp.json();
        setCampaign(campaign.data);
      } catch(err) {
        history.push("/404");
      }
    };
    fetchCampaign();
  }, [params.id, history]);

  if (!campaign) return null;
  return <Campaign campaign={campaign} />;
};

export default CampaignContainer;
