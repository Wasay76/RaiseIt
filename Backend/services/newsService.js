const axios = require('axios');

const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = process.env.NEWS_API_KEY;

const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: '"Ontario politics" OR "Queen\'s Park" OR "Doug Ford"',  // 👈 very specific
        language: 'en',
        sortBy: 'relevancy',
        domains: 'cbc.ca,globalnews.ca,thestar.com,ctvnews.ca,tvo.org,torontosun.com',
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw error;
  }
};

module.exports = { fetchTopHeadlines };
