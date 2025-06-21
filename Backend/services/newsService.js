// Backend/services/newsService.js
const axios = require('axios');

const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const API_KEY      = process.env.NEWS_API_KEY;

async function fetchOntarioPolitics() {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        // broader search:
        q: 'Ontario politics OR Queen\'s Park OR Doug Ford OR Ontario legislature',
        language: 'en',
        sortBy:   'relevancy',  // most relevant first
        pageSize: 3,            // return exactly 3 articles
        apiKey:   API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching news:', err.message);
    throw err;
  }
}

module.exports = { fetchOntarioPolitics };
