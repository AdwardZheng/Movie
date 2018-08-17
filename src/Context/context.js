import React from "react";

export const SearchContext = React.createContext({
    searchName: '',
    updateSearchName: () => {},
});

export const PageContext = React.createContext({
    page: '1',
    updatePage: () => {},
});