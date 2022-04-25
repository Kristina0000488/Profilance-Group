import React     from "react";
import {
    Routes,
    Route,
}                from "react-router-dom";
import Header    from './Header';
import MainPage  from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import NewsPage  from '../pages/NewsPage';


export default class Router extends React.Component
{  
    render() 
    {
        return (<>
            <Header /> 
            <Routes>
                <Route path="/"      element={ <MainPage />  } />
                <Route path="/news"  element={ <NewsPage />  } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="*"      element={ <MainPage />  } />
            </Routes>
        </>)
    }
}