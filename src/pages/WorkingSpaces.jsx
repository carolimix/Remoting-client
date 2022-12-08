import React from 'react';
import { Link } from "react-router-dom";
import Add from './Add';

function WorkingSpaces() {
    return (
        <div>
            <h1>Here you can see all the available options we could gather</h1>
            <h2>If you know any other ones please add them here <Link to="/add" > <button> 💻 </button></Link></h2>
        </div>
    );
};


export default WorkingSpaces;