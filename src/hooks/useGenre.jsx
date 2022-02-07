// function with some logic that will be use again and again 

const useGenres = (selectedGenres) => {
   if(selectedGenres.length < 1) return "";

   const GenreIds = selectedGenres.map((genre) => genre.id);
   return GenreIds.reduce((accumulator, current) => accumulator + ',' + current);
}

export default useGenres;