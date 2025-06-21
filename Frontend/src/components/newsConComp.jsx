import React, { useEffect, useState } from "react";
import "../styles/newsPage.css";      // ← ensure this import is here
import NewsTile from "./NewsTile";

export default function NewsConComp() {
  const [articles, setArticles] = useState([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    fetch("http://localhost:5004/api/news/top-news")
      .then((r) => r.json())
      .then((j) => setArticles((j.articles || []).slice(0, 3)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (!articles.length) return <p>No articles found.</p>;

  return (
    <div className="tileContainer">
      {articles.map((a,i) => (
        <NewsTile
          key={i}
          img={a.urlToImage}
          title={a.title}
          location={a.source.name}
          blurb={a.description}
          url={a.url}
        />
      ))}
    </div>
  );
}
