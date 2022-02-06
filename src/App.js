import './App.css';
import Movie from './components/Movie';

function App() {

  const movies = ["1", "2", "3"];

  return (
    <div className="app">
       {movies.map((movie) => (
         <Movie />
       ))}
    </div>
  );
}

export default App;
