import React from 'react';

function Footer() {
    return (
        <footer className="relative px-1 pt-1 pb-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap pt-6 text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h1 variant="h4" className="mb-4" color="blue-gray">
              Remoting
              </h1>
              <h2 className="font-normal text-blue-gray-500">
                Find your Work Space.
              </h2>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <h3
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Copyright © 2022 Remoting by <a href="/https://github.com/carolimix?tab=repositories">Carolina Acuña </a> 
            </h3>
              </div>
              </div>
              </div>
              </footer>
    );
}


export default Footer;