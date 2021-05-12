import React from 'react'
import './app.scss';

import {Switch , Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.page';
import Articlepage from './pages/articlepage/articlepage.page';
import CategoryPage from './pages/categoryPage/categoryPage.page';
import Contact from './pages/contact/contact.page';

import ScrollTop from './utils/scrollTop';

function App() {
    
    return (
        <div className="app">

        <Header /><div className="height"></div>
        <ScrollTop>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/article/:category/:slug" component={Articlepage}/>
                <Route exact path="/articles/:category" component={CategoryPage}/>
                <Route exact path="/contact" component={Contact}/>
                
            </Switch>        
        </ScrollTop>
        <Footer />

        </div>
    )
}

export default App


