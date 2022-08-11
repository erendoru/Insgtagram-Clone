import './App.scss';
import Post from './Post'

function App() {
  return (
    <div className="App">

      <div className="app__header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
        alt="logo" className="app__headerImage" />
      </div>

      <Post username='erend0ru' caption='WOW first time' imageUrl='https://pbs.twimg.com/profile_images/1389889590127955969/UeZQ9TBm_400x400.jpg' />
      <Post />
      <Post />



    </div>
  );
}

export default App;
