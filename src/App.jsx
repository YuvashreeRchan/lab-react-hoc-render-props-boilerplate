import './App.css';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import LikeImageHoc from './components/HOC/LikeImageHoc';
import LikePostHoc from './components/HOC/LikePostHoc';
import LikeImageRP from "./components/RenderProps/LikeImageRP";
import LikePostRP from "./components/RenderProps/LikePostRP";
import RenderProps from "./components/RenderProps/RenderProps";

function App() {
  return (
    <div>
      <h2>Using HOC</h2>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePostHoc/>
        <LikeImageHoc/>
      </div>

      <h2>Using Render Props</h2>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <RenderProps
          render={(counter, handleCounter) => (
            <LikePostRP counter={counter} handleCounter={handleCounter} />
          )}
        />
        <RenderProps
          render={(counter, handleCounter) => (
            <LikeImageRP counter={counter} handleCounter={handleCounter} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
