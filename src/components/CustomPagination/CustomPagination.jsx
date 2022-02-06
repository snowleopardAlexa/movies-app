import './custompagination.css';
import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme ({
  palette: {
    type: 'dark'
  }
})

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

  const handlePaginationChange= (page) => {
      setPage(page);
      window.scroll(0,0);
  };

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <Pagination 
            className="pagination"
            count={numOfPages} 
            onChange={(e) => handlePaginationChange(e.target.textContent)} 
            hideNextButton
            hidePrevButton
            color="primary"
          />
        </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
