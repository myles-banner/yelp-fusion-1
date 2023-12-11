'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'TnGEpgsxdiOtzCsveEyswxornDpPt0mVYi5AC2IXvIADFBAS7v39qjYOy5KQUroSe6u_mfEXhjN3XfhISeR_z0uoDFn9IrzBEBRoypeqZbGXrGw5ssDPs8ZXcFhmZXYx';

const searchRequest = {
  term:'McDonald\'s',
  location: 'Austin, TX'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});