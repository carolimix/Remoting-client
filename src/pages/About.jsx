function About() {
  return (
    <div className="container mx-auto flex space-x-4">
      <div className="w-96">
        <header floated={false} className="h-80">
          <img className="rounded-full"
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NTAzOTQwNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </header>
        <body className="text-center">
          <h4 color="blue-gray" className="mb-2">
          <i className="text-2xl">Share</i> 
          </h4>
        </body>
        <p className="text-center">
        Share your experiences to help others, you can also create an user
            to leave reviews and add your favorite places.
        </p>
      </div>
      <div className="w-96">
        <header floated={false} className="h-80">
          <img className="rounded-full"
            src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1MDM5NDA0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </header>
        <body className="text-center">
          <h4 color="blue-gray" className="mb-2">
          <i className="text-2xl">Feel good</i> 
          </h4>
        </body>
        <p className="text-center">
          Find alternatives for remote work, based on your preferences and
          location.
        </p>
      </div>
      <div className="w-96">
        <header floated={false} className="h-80">
          <img className="rounded-full"
            src="https://images.unsplash.com/photo-1491944799262-a5be522e2300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NTAzOTQwNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </header>
        <body className="text-center">
          <h4 color="blue-gray" className="mb-2">
            <i className="text-2xl">Discover</i> 
          </h4>
        </body>
        <p className="text-center">
        Discover new places and meet people who share your working
          preferences.
        </p>
      </div>
    </div>

    /* 
<div className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">    
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <header className="w-5 h-5 text-white" >
            <h3>💻</h3>
            <h3>Work Remote</h3>
          </header>
          <p>
            Find alternatives for remote work, based on your preferences and
            location.
          </p>
        </div>
      

      <div className="rounded-2m h-60 w-30 rounded-md shadow-lg shadow-gray-500/10">
        <div className="px-4 text-center">
        <header>
          <h3>💡</h3>
          <h3>Discover</h3>
        </header>
        <p>
          Discover new places and meet people who share your working
          preferences.{" "}
        </p>
        </div>
      </div>


      <div className="rounded-2m h-60 w-30 rounded-md shadow-lg shadow-gray-500/10">
        <div className="px-4 text-center">
          <header>
            <h3>🗣️</h3>
            <h3>Share!</h3>
          </header>
          <p>
            Share your experiences to help others, you can also create an user
            to leave reviews, add your favorite places and add new ones.{" "}
          </p>
        </div>
      </div>
      </div>
      </div> */
  );
}

export default About;
