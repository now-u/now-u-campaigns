import React from 'react';
import htmlContent from './index.html';

// assets for this page are separated into the public folder and src/domain/home folder
// they will be consolidated once we migrate everything to react
// please refer to the index.html file in the public folder for more details

export default function Homepage() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
