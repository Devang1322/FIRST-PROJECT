import React, {useEffect,useState}from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        const getArticle= async()=>{
            const response=await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0ebcccaaa8984eb3925e0ba0e5bb378a')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticle()
    },[])
  return (
    <div style={{alignItem: "center"}}>
    {articles.map(article => {
        return(
            <NewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage} 
            />
        )
    })}
    </div>
  )
}

export default NewsList