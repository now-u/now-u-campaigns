import { privacyNotice } from '../assets';

export const navLinks = [
  { display: 'Campaigns', path: '/campaigns' },
  { display: 'Now-u app', path: '/now-u-app' },
  { display: 'About us', path: '/campaigns' },
  { display: 'Blog', path: '/press' },
  { display: 'Privacy Policy', external: privacyNotice },
  //  { display: 'Get in touch', path: '/get-in-touch' },
  // { display: 'Press', path: '/press' },
];

export const mobileNavLinks = [
  { display: 'Campaigns', path: '/campaigns' },
  { display: 'Now-u app', path: '/now-u-app' },
  { display: 'About us', path: '/campaigns' },
  // { display: 'Get in touch', path: '/get-in-touch' },
  // { display: 'FAQ', path: '/press' },
  { display: 'Blog', path: '/press' },
  // { display: 'Newsletter', path: '/press' },
  { display: 'Privacy Policy', external: privacyNotice },
];

export const campaignsURL = 'https://api.now-u.com/api/v1/campaigns';
