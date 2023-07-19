import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import  "../../src/scss/articles.scss";
import noImage from "../../src/images/no images.svg";
const baseURL = "https://newsapi.org/v2/top-headlines/"
const ApiKey = "7b63627fe49f41aa8bf1ac1fc44d9a52"

const CategoryNewsList = () => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");
	const params = useParams();
	const category = params.category;
	async function fetchData() {
		axios.get(baseURL, {
			params: {
				q: search,
				category: category,
				apiKey: ApiKey,
			}
		}).then(response => {
      const arr = response.data.articles;
      arr.forEach((item, index) => {
	      item.urlToImage = item.urlToImage || noImage;
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
			<p className='erorr-text'>{error}</p>
		</div>;
	} else if (articles) {
		const items = articles.map((article, index) => {
			if (index > 9) {
				return (
						<div key={index} className="article">
							<Link className='article-link' to={"/news/" + index + "/" + search}>{article.title}</Link>
							<p>{article.description}</p>
							<div className='article-info'>
								<div className='article-date'>{article.publishedAt}</div>
								<div className='article-author'>{article.author}</div>
							</div>
							<img alt= {article.source.name} src= {article.urlToImage}/>
						</div>
				)
			}
		});
		const top_items = articles.map((article, index) => {
			if (index < 4) {
				return (
						<div key={index} className="article">
							<Link className='article-link' to={"/news/" + index + "/" + search}>{article.title}</Link>
							<div className='article-info'>
								<div className='article-date'>{article.publishedAt}</div>
								<div className='article-author'>{article.author}</div>
							</div>
						</div>
				)
			}
		});
		const header_items = articles.map((article, index) => {
			if (index > 4 && index < 9 ) {
				return (
						<div key={index} className="article">
							<Link className='article-link' to={"/news/" + index + "/" + search}>{article.title}</Link>
							<p className='article-description'>{article.description}</p>
							<div className='article-info'>
								<div className='article-date'>{article.publishedAt}</div>
								<div className='article-author'>{article.author}</div>
							</div>
							<img alt= {article.source.name} src= {article.urlToImage}/>
						</div>
				)
			}
		});
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
						<input className='search-btn' type="submit" value="Search"/>
					</form>
					<div className="articles">
						<div className='header'>{header_items}</div>
						<div className='top'>
							<h2 className='title'>Top headlines</h2>
							{top_items}
						</div>
						<div className='list'>{items}</div>
					</div>
				</div>
		);
	}
}

export default CategoryNewsList;