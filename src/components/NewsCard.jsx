import { FiClock, FiHeart } from 'react-icons/fi';
import moment from 'moment';

const favNews = ({article}) => {
}

const NewsCard = ({article}) => {
  
const timeago = moment(article.created_at).fromNow();

  if(!article.story_title) return null;
  return (
    <div className='news-card'>
        <div className="content-news">
            <a href={article.story_url} target='_blank' rel='noreferrer'> 
              <div className="content-author">
                  <FiClock className="ico-time" />
                  <p>{timeago}</p>
                  <p><span>by</span> {article.author}</p>
              </div>
              <h3 className='title__news'>{article.story_title}</h3>
            </a>
        </div>
        <div className="favorite">
            <FiHeart className="ico-heart" onClick={favNews(article)} />
        </div>
    </div>
  )
}

export default NewsCard;