import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
   <div className="App" >
   <Header name={'vishal'}/>
   <Post post_heading={'travel'} content={'If you are working as an illustrator, its not absolutely vital to have a bespoke portfoliowebsite: services like Behance, DeviantArt and Cargo Collective are a good, quick and easy way of sharing your work online.'}/>
   <Post post_heading={'travel'} content={'If you are working as an illustrator, its not absolutely vital to have a bespoke portfoliowebsite: services like Behance, DeviantArt and Cargo Collective are a good, quick and easy way of sharing your work online.'}/>
   <Post post_heading={'travel'} content={'If you are working as an illustrator, its not absolutely vital to have a bespoke portfoliowebsite: services like Behance, DeviantArt and Cargo Collective are a good, quick and easy way of sharing your work online.'}/>
   <Post post_heading={'travel'} content={'If you are working as an illustrator, its not absolutely vital to have a bespoke portfoliowebsite: services like Behance, DeviantArt and Cargo Collective are a good, quick and easy way of sharing your work online.'}/>
   
    </div>
  );
}

export default App;
