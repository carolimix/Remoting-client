import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Search({search, setSearch}) {
    const [ data, setData] = useState("");
console.log(search)

    return (
              <div  className="flex border border-purple-200 rounded">
            <h2>Search by name <br/> or Bezirk</h2>
            <input
                placeholder="🔍 Search"
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                className=" w-96 border rounded border-gray-400 h-10 focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
            />
            </div>
    );
}

export default Search;