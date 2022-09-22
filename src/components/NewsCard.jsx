import { FiClock, FiHeart } from 'react-icons/fi';

const favNews = () => {
  console.log("a fav");
}

const NewsCard = ({article}) => {
  if(!article.story_title) return null;
  return (
    <div className='news-card'>
        <div className="content-news">
            <a href={article.story_url} target='_blank' rel='noreferrer'> 
              <div className="content-author">
                  <FiClock className="ico-time" />
                  <p>{article.created_at}</p>
                  <p>{article.author}</p>
              </div>
              <h3 className='title__news'>{article.story_title}</h3>
            </a>
        </div>
        <div className="favorite">
            <FiHeart className="ico-heart" onClick={favNews} />
        </div>
    </div>
  )
}

export default NewsCard;