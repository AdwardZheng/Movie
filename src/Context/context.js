import React from "react";

export const PageContext = React.createContext({
    page: 'home',
});

export const SearchContext = React.createContext({
    serchName: '',
})