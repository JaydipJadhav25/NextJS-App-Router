

const getMovies = async() =>{
    const movies = await fetch("https://dummyapi.online/api/movies")
    return await movies.json();
}


async function Movies() {

    const movies = await getMovies();

    // console.log("data is : " , movies);

    return (
        <div style={{backgroundColor : "darkred"}}>

            <h1>This Movies Page</h1>

            {
                movies.map((ele : any) => <li key={ele.id}>{ele.movie}</li>)
            }

        </div>
    );
  }
  
  export default Movies;
  