# now-u-campaigns

This repo is currently focused on creating a SPA to display campaigns. Its scope will eventually be the whole site.

## Setup

1. Run `npm i`
2. Run `npm start` or to build `npm run build`

## Notes

The homepage files are separated into both the /public and /src/domain/home folders. Eventually we can consolidate all the homepage assets into the /home folders when we migrate everything to React.

`.env` file is added to commit for eslint so be sure to remove this if adding new environment variables

To deploy to github pages for testing run `npm run deploy`

## To Dos

1. Wire up app download buttons
2. Fetch real campaign data
3. Must determine what the nav bar should look like when on /campaigns route
