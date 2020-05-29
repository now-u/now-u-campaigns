import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { campaignsURL } from '../../../utils/constants';
import Campaign from './CampaignDetails.component';

const CampaignContainer = () => {
  const { params } = useRouteMatch();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      const resp = await fetch(`${campaignsURL}/${params.id}`);
      const campaign = await resp.json();
      setCampaign(campaign.data);
    };
    fetchCampaign();
  }, [params.id]);

  if (!campaign) return null;
  return <Campaign campaign={campaign} />;
};

export default CampaignContainer;
