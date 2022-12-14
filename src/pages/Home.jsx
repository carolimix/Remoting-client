import React from "react";

function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full rounded-lg w-full bg-[url('https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/25 bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 color="white" className="mb-6 font-black text-5xl">
                Remoting.
              </h1>
              <h2 className="opacity-100 text-2xl">
                Having the freedom to work remotely is a great advantage for
                many people. A website that helps you find places to work
                remotely can be very beneficial in a variety of ways. Instead of
                spending hours searching for the best places to work remotely,
                you can quickly and easily find the information you need right
                here.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="mt-32 flex flex-wrap items-center">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {/*  <h1 className="h-6 w-6 text-blue-gray-900"></h1> */}
            </div>
            <h3 variant="h3" className="mb-3 font-bold" color="blue-gray">
              Working with us is a pleasure
            </h3>
            <p className="mb-8 font-normal text-blue-gray-500">
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
              <br />
              <br />
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
            <button variant="outlined">read more</button>
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center rounded-md px-4 md:w-4/12 lg:mt-0">
            <div className="shadow-lg shadow-gray-500/10 rounded-md">
              <header className="relative h-56">
                <img
                  alt="Card Image"
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-full w-full rounded-lg"
                />
              </header>
              <div>
                <h5 variant="h5" color="blue-gray" className="mb-3 font-bold">
                  Top Notch Services
                </h5>
                <p className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50"></div>
    </>
  );
}

export default Home;
