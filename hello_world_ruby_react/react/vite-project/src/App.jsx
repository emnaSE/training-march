import React, { useState, useEffect } from 'react';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h1>ArticleList</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
