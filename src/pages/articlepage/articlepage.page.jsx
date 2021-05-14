import React ,{useEffect}from 'react'
import './articlepage.styes.scss';
import {data} from '../../data/index';

import parse from 'html-react-parser';
import AsideArticles from '../../components/asideArticles/asideArticles.component';
 

import ReactGA from 'react-ga';


const initGa = () =>{
    console.log("init GA");
    ReactGA.initialize("UA-180219995-1");
}
const logPageView = () => {
    ReactGA.set({page : window.location.pathname});
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function Articlepage({match}) {

    useEffect(() => {
        initGa();
        logPageView();
    })

    const {category , slug} = match.params;
    const title = slug.replaceAll("-"," ").replaceAll("=","?");
    let article = null;
    let related = [];
 
    
    data.forEach(item => {
        if(item.title === title && category === item.category) article = item;
        if(category === item.category && item.title !== title) related.push(item)
    }) 
    

    return (
        <div className="articlepage__wrap container">
            <div className="left articlepage ">
                <h1>{article.title}</h1>
                <img  src={`/images/${article.id}.jpeg`} alt={article.title}/>
                <div className="articlepage__content">
                {parse(article.articleContent)}
                </div>
            </div>       
            <div className="right">
                <AsideArticles title={"related articles"} data={related} />
            </div>
        </div>

    )
}

export default Articlepage

 