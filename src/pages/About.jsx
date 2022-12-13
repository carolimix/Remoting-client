function About() {
  return (
    <div className="flex">
    
      <div className="rounded-2m h-60 w-30 rounded-md shadow-lg shadow-gray-500/10">
        <div className="px-4 text-center">
          <header>
            <h3>💻</h3>
            <h3>Work Remote</h3>
          </header>
          <p>
            Find alternatives for remote work, based on your preferences and
            location.
          </p>
        </div>
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
  );
}

export default About;
