import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import BottomNav from './components/BottomNav/BottomNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

function App() {
  return (
    <>
  
    <Header />
    <div className="app">
      <Container>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <ArrowCircleUpOutlinedIcon />
      </Container>
    </div>
    <BottomNav />
    </>
  );
}

export default App;
