import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { SearchContext } from "./Context/context";
import Home from './Component/Home/home.js';
import Movie  from './Component/Movie/Movie.js';
import Search from './Component/Movie/MovieSearch.js';
import MyLayout from './Layout/MayLayout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MyApp extends Component {
    constructor() {
        super();

        this.state = {
            page: '',
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

    render() {
        return (
            <SearchContext.Provider value={{searchName: this.state.searchName, updateSearchName: this.handleChangeSearchName}}>
                <div className="App">
                    <Router>
                        <Route  path="/" render={({history,location}) => {
                            return (
                                <MyLayout history={history} location={location}>
                                    <Switch>
                                        <Route exact path="/" component={Home}/>
                                        <Route exact path="/home" component={Home}/>
                                        <Route  path="/movie" component={Movie}/>
                                        <Route exact path="/search" component={Search}/>
                                        <Route exact path="/search/:movieName" component={Search}/>
                                    </Switch>
                                </MyLayout>
                            );
                        }}/>
                        
                    </Router>
                </div>  
            </SearchContext.Provider>             
        );
    }
}

export default MyApp;