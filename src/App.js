import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import BottomNav from './components/BottomNav/BottomNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Trending/Trending';
import Series from './pages/Trending/Trending';
import Search from './pages/Trending/Trending';

function App() {
  return (
    <>
    <Routes>
    <Header />
    <div className="app">
      <Container>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Container>
    </div>
    <BottomNav />
    </Routes>
    </>
  );
}

export default App;
