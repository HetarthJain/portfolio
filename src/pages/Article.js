import React from 'react';
import { useParams } from 'react-router-dom';

function Article({articles}) {
	const { id } = useParams();
	console.log("id is",id);

    // Find the article that matches the ID
	const article = articles.find((article) => article.id === parseInt(id));
	console.log(article);

    if (!article) {
        return <h2>Article not found</h2>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.date}</p>
            <div>{article.content}</div>
        </div>
    );
}
export default Article;