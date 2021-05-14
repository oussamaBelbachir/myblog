import React ,{useEffect} from 'react'
import './categoryPage.styles.scss';
import ArticleItem from '../../components/articleItem/articleItem.component';
import {data} from '../../data/index';


import ReactGA from 'react-ga';


const initGa = () =>{
    console.log("init GA");
    ReactGA.initialize("UA-180219995-1");
}
const logPageView = () => {
    ReactGA.set({page : window.location.pathname});
    ReactGA.pageview(window.location.pathname);
}


function CategoryPage({match}) {

    useEffect(() => {
        initGa();
        logPageView();
    })


    const {category} = match.params;
    console.log(category);
    let categoryData  = [] ;
    
    data.forEach((item) => {
        if(item.category === category) categoryData.push(item);
        
    })
    console.log(categoryData);
    
    
    return (
        <div className="categorypage container">
            <h1>category : <span>{category}</span></h1>

            <div className="grid__articles">
            {
                categoryData.map(item => <ArticleItem key={item.id} item={item}/>)
            }            
        </div>
        </div>
    )
}

export default CategoryPage