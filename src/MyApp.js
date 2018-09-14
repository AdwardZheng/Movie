import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { SearchContext, PageContext, MovieListContext } from "./Context/context";
// import Movie  from './Page/Movie/Movie.js';
import Movie from './container/Movie';
import Search from './Page/MovieSearch/MovieSearch.js';
import MyLayout from './Layout/MayLayout';
import MovieDetail from "./Page/MovieDetail/MovieDetail";
// import MovieTop from './Page/MovieTop250/MovieTop.js';
import MovieTop from "./container/MovieTop250";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieComing from './Page/MovieComing/MovieComing';
import comingStore from './mobxStore/store';

class MyApp extends Component {
    constructor() {
        super();

        this.state = {
            page: 'home',
            searchName: '',
        }
    }

    handleChangeSearchName = name => {
        this.setState(preState => {
            return ({
                searchName: name
            });
        });
    }

    handleChangePage = page => {
        this.setState({
            page: page,
        });
    }


    render() {
        return (
            <PageContext.Provider value={{page: this.state.page, updatePage: this.handleChangePage}}>
                <SearchContext.Provider value={{searchName: this.state.searchName, updateSearchName: this.handleChangeSearchName}}>
                    <div className="App">
                        <Router>
                            <Route  path="/" render={({history,location}) => {
                                return (
                                    <MyLayout history={history} location={location}>
                                        <Switch>
                                            <Route exact path="/" render={() => <Movie/>}/>
                                            <Route exact path="/search" component={Search}/>
                                            <Route exact path="/search/:movieName" component={Search}/>
                                            <Route exact path="/movie" component={Movie}/>
                                            <Route exact path="/movie/top250" render={() => <MovieTop/>}/>
                                            <Route exact path="/movie/movieComing" render={() => <MovieComing mobxStore={comingStore} /> }/>
                                            <Route exact path="/movie/:id" component={MovieDetail}/>
                                        </Switch>
                                    </MyLayout>
                                );
                            }}/>
                            
                        </Router>
                    </div> 
                </SearchContext.Provider>  
            </PageContext.Provider>        
        );
    }
}

export default MyApp;