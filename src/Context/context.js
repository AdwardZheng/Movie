import React from "react";

export const SearchContext = React.createContext({
    searchName: '',
    updateSearchName: () => {},
});

export const PageContext = React.createContext({
    page: 'home',
    updatePage: () => {},
});

export const MovieListContext = React.createContext({
    MovieComing:[],
    MovieTop250:[],
    MovieInTheater:[],
    MovieUSBox:[],
    updateMovieList: () =>{},
});