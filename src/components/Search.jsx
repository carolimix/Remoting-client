import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [search, setSearch] = useState("");
    const [ data, setData] = useState("");

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/spaces`)
      .then((response) => setData(response.data));
  }, []);

    const searched = data.filter((result) => {
        if (!result.name) {
            return false;
        } else if (!result.district) {
            return true;
        } else {
            return (
                result.name.toLowerCase().includes(search.toLowerCase) ||
                result.district.toLowerCase().includes(search.toLowerCase)

            )
        }

    })

    return (
              <div className=" bg-gray-300 ">
            <h1>Search</h1>
            <input
                placeholder="Search"
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