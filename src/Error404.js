import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
         <div id="notfound">
             <div className="notfound">
                 <div className="notfound-404">
                     <h1>404</h1>
                 </div>
                <h2>We are sorry!! Page not founf</h2>
                <p>go to back page nothing is here!!</p>
                 <NavLink to="/">back to home page</NavLink>
             </div>
             </div>   
        </>
    );
};

export default Error404;
