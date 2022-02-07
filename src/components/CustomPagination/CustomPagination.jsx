import './custompagination.css';
import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

  const handlePaginationChange= (page) => {
      setPage(page);
      window.scroll(0,0);
  };

  return (
    <div>
          <Pagination 
            className="pagination"
            count={numOfPages} 
            onChange={(e) => handlePaginationChange(e.target.textContent)} 
            hideNextButton
            hidePrevButton
            color="primary"
          />
    </div>
  );
};

export default CustomPagination;
