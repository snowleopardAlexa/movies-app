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
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
    });

    const fetchSearch = async () => {
       try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
                process.env.REACT_APP_API_KEY
              }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
        } catch (error) {
            console.error(error);
        }
      };

      useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
        // eslint-disable-next-line  
      }, [type, page]);
    
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
           onChange={(e) => setSearchText(e.target.value)}
         />
         <Button variant='contained' style={{marginLeft: 10}}>
             <SearchIcon />
         </Button>
         </div> 
         <Tabs 
           value={type} 
           indicatorColor="primary" 
           textColor="primary"
           onChange={(e, newValue) => {
               setType(newValue);
               setPage(1);  
           }}
           style={{ paddingBottom: 5}}  
          >
           <Tab style={{ width: "50%" }} label="Search Movies" />
           <Tab style={{ width: "50%" }} label="Search TV Series" />
         </Tabs>
         </ThemeProvider>
     </div>
    );
  };
  
  export default Search;