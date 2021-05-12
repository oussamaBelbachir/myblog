import React from 'react'
import './asideArticles.styles.scss';
import ArticleItem from '../articleItem/articleItem.component';
function AsideArticles({title , data}) {

    console.log(data);
    
    return (
        <div className="asideArticles">
            <h2>{title}</h2>

            <div className="grid__articles colomn">
            {
                data.map(item => <ArticleItem key={item.id} item={item}/>)
            }            </div>
        </div>
    )
}

export default AsideArticles
