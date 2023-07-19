import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { addDays } from 'date-fns';
import noImage from "../../src/images/no images.svg";
import Pagination from '@mui/material/Pagination/Pagination';
import Stack from '@mui/material/Stack/Stack';
import  "../../src/scss/articles.scss";

const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "7b63627fe49f41aa8bf1ac1fc44d9a52"

const NewsList = () => {
	const [articles, setArticles] = useState();
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("Popular");
	const [page, setPage] = useState(1);
	const [total_pages, setTotalPages] = useState(10);

	async function fetchData(currentPage) {
		axios.get(baseURL, {
			params: {
				q: search,
				apiKey: ApiKey,
				page:currentPage,
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
      localStorage.setItem('articles', JSON.stringify(arr));
    })
			.catch(error => {
      setError(error.response.data.message);
    })
	}


	useEffect(() => {
		fetchData(page)
	}, []);

	const handleSubmit = e => {
		e.preventDefault()
		fetchData()
	}
	const handleChange = (event, value) => {
		setPage(value);
		fetchData(value);
	};

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
				<h1 className='search-name'>{search}</h1>
				<div className="articles">
					<div className='header'>{header_items}</div>
					<div className='top'>
						<h2 className='title'>Top headlines</h2>
						{top_items}
					</div>
					<div className='list'>{items}</div>
				</div>
				<div className='pagination' >
					<Stack spacing={22}>
						<Pagination count={total_pages} page={page} onChange={handleChange} />
					</Stack>
				</div>
			</div>
		);
	}
}

export default NewsList;