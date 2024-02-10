const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const AIRTABLE_BASE_ID = 'appxUK8EFDFVG3zJt'; // Your Airtable Base ID
  const AIRTABLE_TABLE_NAME = encodeURIComponent('Widget Database'); // URL-encoded table name
  const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
  const AUTH_HEADER = 'Bearer patnNg05O3lq0cNar.0a91b14b1d6aa12dedc62e62b22be402f46130484a900f35d91bd11f86ccc1b8'; // Your Personal Access Token

  try {
    const response = await fetch(AIRTABLE_API_URL, {
      headers: {
        Authorization: AUTH_HEADER
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.records)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from Airtable' })
    };
  }
};
