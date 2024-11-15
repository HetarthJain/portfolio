import { Link } from 'react-router-dom';

function Articles({ articles }) {
    return (
        articles.map((article) => {
            return (
                <div className="article-comp">
                    <h1>My Articles</h1>
                    <div className="article">
                    <Link to="https://theprint.in/campus-voice/india-lacks-an-intellectual-economic-hindu-right-wing-bjp-does-not-qualify/1174580/" className="article-title">
                            <p>{article.title}</p>
                        </Link>
                        <span className="article-date">{article.date}</span>
                    </div>

                    {/* <p className="article-content">{article.content}</p> */}
                </div>
            )
        })
    )
}
export default Articles;