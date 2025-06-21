// Backend/controllers/newsController.js
const { fetchOntarioPolitics } = require('../Services/newsService');

async function getNews(req, res) {
  try {
    const data = await fetchOntarioPolitics();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news', error: err.message });
  }
}

module.exports = { getNews };
