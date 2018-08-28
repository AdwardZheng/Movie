import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { SearchContext, PageContext } from "./Context/context";
import Home from './Page/Home/Home.js';
import Movie  from './Page/Movie/Movie.js';
import Search from './Page/MovieSearch/MovieSearch.js';
import MyLayout from './Layout/MayLayout';
import MovieDetail from "./Page/MovieDetail/MovieDetail";
import Say from "./Page/Say/Say.js";
import Resume from './Page/Resume/Resume.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MyApp extends Component {
    constructor() {
        super();

        this.state = {
            page: '1',
            searchName: '',
        }
    }

    onCollapse = (collapsed, type) => {
        this.setState({
            collapsed: collapsed,
        });
    }

    handleChangeSearchName = name => {
        // this.setState({
        //     searchName: name,
        // });
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
            <PageContext.Provider value={{page: this.state.page, handleChangePage: this.handleChangePage}}>
                <SearchContext.Provider value={{searchName: this.state.searchName, updateSearchName: this.handleChangeSearchName}}>
                    <div className="App">
                        <Router>
                            <Route  path="/" render={({history,location}) => {
                                return location.pathname !== "/resume" ? (
                                    <MyLayout history={history} location={location}>
                                        <Switch>
                                            <Route exact path="/" component={Home}/>
                                            <Route exact path="/home" component={Home}/>
                                            <Route exact path="/say" component={Say}/>
                                            <Route exact path="/movie" component={Movie}/>
                                            <Route exact path="/search" component={Search}/>
                                            <Route exact path="/search/:movieName" component={Search}/>
                                            <Route exact path="/movie/:id" component={MovieDetail}/>
                                        </Switch>
                                    </MyLayout>
                                ) : <Route exact path="/resume" component={Resume}/>;
                            }}/>
                            
                        </Router>
                    </div>  
                </SearchContext.Provider>  
            </PageContext.Provider>        
        );
    }
}

export default MyApp;