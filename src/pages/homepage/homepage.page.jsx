import React,{useState} from 'react'
import './homepage.styles.scss';
import ArticleItem from '../../components/articleItem/articleItem.component';
import {data} from '../../data/index';
import AsideArticles from '../../components/asideArticles/asideArticles.component';

import SearchInput from '../../components/searchInput/searchInput.component';

function HomePage() {
    const [search , setSearch] = useState("");

     const filteredData = data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    
    
    return (
        <div>

            <SearchInput 
                placeholder="what are you looking for?"
                value={search}
                handleChange={(e) => setSearch(e.target.value)}
            />

            <div className="homepage container">

            <div className="left homepage__articles grid__articles">

                {
                    filteredData.map(item => <ArticleItem key={item.id} item={item}/>)
                }            
            </div>
            <div className="right">
                <AsideArticles title="popular" data={data.slice(0,3)}/>
            </div>


                    
            </div>        
        </div>

    )
}

export default HomePage
