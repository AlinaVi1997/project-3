import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import  "../../src/scss/articles.scss";


const baseURL = "https://newsapi.org/v2/top-headlines/"
const ApiKey = "fd0c5010162c4488a3638c02cf121734"

const CategoryNewsList = () => {
	const [articles, setArticles] = useState();
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");
	const params = useParams();
	const category = params.category;


	async function fetchData() {
		axios.get(baseURL, {
			params: {
				q: search,
				category: category,
				apiKey: ApiKey
			}
		}).then(response => {
      const arr = response.data.articles;
      arr.forEach((item, index) => {
        let category;
        if (index < 10) {
          category = {
            name: 'Top',
            id: 1,
          };
        } else if (index >= 10 && index < 20) {
          category = {
            name: 'Popular',
            id: 2,
          };
        } else if (index > 20) {
          category = {
            name: 'Latest',
            id: 3,
          };
        }
        item.category = category;
      });
      setArticles(arr);
      console.log('arr ', arr);
      localStorage.setItem('articles', JSON.stringify(arr));
    }).catch(error => {
      setError(error.response.data.message);
    })
	}

	useEffect(() => {
		fetchData()
	}, [articles]);

	category ? document.title = 'News | ' + category : document.title = 'News';

	const handleSubmit = e => {
		e.preventDefault()
		fetchData()
	}

	if (error) {
		return <div className="error">
			<h2 className='erorr-text'>{error}</h2>
		</div>;
	} else if (articles) {
		const items = articles.map((article, index) =>
			<div key={index} className="article">
				<Link className='article-link' to={"/news/" + index + "/" + search}><h2>{article.title}</h2></Link>
				{/*<h2>{article.title}</h2>*/}
				<p className='article-description'>{article.description}</p>
				<div className='article-info'>
					<div className='article-date'>{article.publishedAt}</div>
					<div className='article-author'>{article.author}</div>
				</div>
				<img src={article.urlToImage} alt={article.source.name}/>
			</div>
		);
		return (
			<div className='articles-wrapper'>
				<form className='search-news' onSubmit={handleSubmit}>
					<label className="search-label">
						<input className='search-input'
						       type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</label>
					{/*<input className='search-btn' type="submit" value="Search"/>*/}
				</form>
				<h1 className='search-name'>{search}</h1>
				<div className="articles">{items}</div>
			</div>
		);
	}
}

export default CategoryNewsList;