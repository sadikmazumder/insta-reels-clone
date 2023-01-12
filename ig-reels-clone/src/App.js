import "./App.css";

function App() {
  //BEM naming conversion
  return (
    <div className="app">
      <h1> Hey Developer , Lets Builds IG reels Clone !!!</h1>

      <div className="app__top">
        {/** images at top - logo */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt=""
        />
        {/** Reels Text  */}
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {/** Container of app_videos (scrollable container ) */}

        {/** <Video /> */}
        {/** <Video /> */}
        {/** <Video /> */}
        {/** <Video /> */}
        {/** <Video /> */}
        {/** <Video /> */}
      </div>
    </div>
  );
}

export default App;
