import {
    Button,
    createTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import "./Search.css";
  import SearchIcon from "@material-ui/icons/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import CustomPagination from "../../components/Pagination/CustomPagination";
  import SingleContent from "../../components/SingleContent/SingleContent";

const Search = () => {

    const [type, setType] = useState(0);

    const darkTheme = createTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
    });

    return (
     <div>
         <ThemeProvider theme={darkTheme}>
         <div style={{display: "flex", margin: "15px 0px"}}>  
         <span className="pageTitle">Search</span>
         <TextField 
           style={{ flex: 1}}
           className="searchBox"
           label="Search"
           variant="filled"
           // onChange={(e) => setSearchText(e.target.value)}
         />
         <Button variant='contained' style={{marginLeft: 10}}>
             <SearchIcon />
         </Button>
         </div> 
         <Tabs value={type} indicatorColor="primary" textColor="primary">
           <Tab style={{ width: "50%" }} label="Search Movies" />
           <Tab style={{ width: "50%" }} label="Search TV Series" />
         </Tabs>
         </ThemeProvider>
     </div>
    );
  };
  
  export default Search;