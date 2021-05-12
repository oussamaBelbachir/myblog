import React from 'react'
import './articleItem.styles.scss';
import { AiFillTags } from "react-icons/ai";
import {Link} from 'react-router-dom';

function ArticleItem({item}) {
    return (
        <Link to={`/article/${item.category}/${item.title.replaceAll(" ","-").replaceAll("?" , "=")}`}>
            <div className="articleItem">
                <img  src={`/images/${item.id}.jpeg`} alt={item.title}/>
                <h3>{item.title}</h3>
                <div className="articleItem__tags"><AiFillTags className="tags__icon"/> <span>{item.category}</span></div>
            </div>        
        </Link>

    )
}

export default ArticleItem
