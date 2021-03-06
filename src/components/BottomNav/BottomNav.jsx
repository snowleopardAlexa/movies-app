import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        backgroundColor: '#8E0E00',
        zIndex: 100,
    }
})

const BottomNav = () => {

const classes = useStyles();
const [value, setValue] = useState(0);
const navigate = useNavigate();

useEffect(() => {
    if (value === 0) navigate("/");
    else if ( value === 1) navigate("/movies");
    else if ( value === 2) navigate("/series");
    else if ( value === 3) navigate("/search");
}, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction 
          label="Trending" 
          icon={<WhatshotIcon />} 
          style={{ color: "white"}}
        />
        <BottomNavigationAction 
          label="Movies" 
          icon={<MovieIcon />} 
          style={{ color: "white"}}
        />
        <BottomNavigationAction 
          label="TV Series" 
          icon={<TvIcon />} 
          style={{ color: "white"}}
        />
        <BottomNavigationAction 
          label="Search" 
          icon={<SearchIcon />} 
          style={{ color: "white"}}
        />
    </BottomNavigation>
  );
};

export default BottomNav;
