// controllers/newsController.js
const { fetchTopHeadlines } = require('../services/newsService');

const getNews = async (req, res) => {
  try {
    const data = await fetchTopHeadlines();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

module.exports = { getNews };
