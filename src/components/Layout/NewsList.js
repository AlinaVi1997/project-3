import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { addDays } from 'date-fns';
import noImage from "../../src/images/no images.svg";
import  "../../src/scss/articles.scss";

// https://newsapi.org/v2/everything?q=apple&from=2023-07-04&to=2023-07-04&sortBy=popularity&apiKey=c0644f4a38d04c39b33c5705968cf9fa
const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "7aaa7a00b5274fcaae8e5661fe422cd2"

const NewsList = () => {
	const [articles, setArticles] = useState();
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("Popular");

	async function fetchData() {
		axios.get(baseURL, {
			params: {
				q: search,
				apiKey: ApiKey,
				from: addDays(new Date(),-2),
				to:new Date(),
				sortBy:'popularity',
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
      console.log('arr1 ', arr);
      localStorage.setItem('articles', JSON.stringify(arr));
    }).catch(error => {
      setError(error.response.data.message);
    })
	}

	useEffect(() => {
		fetchData()
	}, []);

	const handleSubmit = e => {
		e.preventDefault()
		fetchData()
	}

	const errorHandler = article => {
		article.urlToImage = 'https://i.guim.co.uk/img/media/08d85aba77b4ad2ae14c2feb8449ba6783c0b425/0_0_3670_2201/master/3670.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b64b76c80422b2c3fd914316495dea46'
	}
	if (error) {
		return <div className="error">
			<p className='erorr-text'>{error}</p>
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
				<img  className='' alt= {article.source.name}
				     src= {article.urlToImage}
				/>
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
					<input className='search-btn' type="submit" value="Search"/>
				</form>
				<h1 className='search-name'>{search}</h1>
				<div className="articles">{items}</div>
			</div>
		);
	}
}

export default NewsList;