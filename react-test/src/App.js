import { useState } from "react";
import './App.css';
// 6
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// 1
const Home = ({list, deleteMovie}) => {
  return(
    <>
      <h1>Movies</h1>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th width="80">Title</th>
          <th>Genre</th>
          <th width="120">Release Date</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.releaseDate}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};
const Create = ({addMovie}) => {
  //8
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

      //9 
    if(id === "" || title === "" || genre === "" || releaseDate === "") {
      alert("모든 입력값을 반드시 입력해야 합니다");
      return;
    }
    //9

    addMovie(id, title, genre, releaseDate);
    setId("");
    setTitle("");
    setGenre("");
    setReleaseDate("");
  };
  //8

  return (
  <>
    <h1>Create Movie</h1>
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="Input movie id" value={id} onChange={(e) => setId(e.target.value)} 
        />
      </div>
      <div>
      <input type="text" placeholder="Input movie title" value={title} onChange={(e) => setTitle(e.target.value)}  />
      </div>
      <div>
      <input type="text" placeholder="Input movie genre" value={genre} onChange={(e) => setGenre(e.target.value)}  />
      </div>
      <div>
        <label>출시일 : </label>
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
      </div>
      <input type="submit" value="Add movie" />
    </form>
  </>)
};
const App = () => {

   // 3, 7
   const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Movie 1",
      genre: "Drama",
      releaseDate: "2022-01-01",
    },
    {
      title: "Movie 2",
      genre: "Action",
      releaseDate: "2022-02-01",
    },
    {
      title: "Movie 3",
      genre: "Comedy",
      releaseDate: "2022-03-01",
    },
    //7
   ]);

   const addMovie = (id, title, genre, releaseDate) => {
    // 10. 중복 ID 입력 불가
    for(const item of movies) {
      if(item.id === parseInt(id)) {
        alert("중복되는 ID는 입력할수 없습니다");
        return;
      }
    }

    // const result = movies.some((item) => {
    //   return item.id === parseInt(id);
    // });
    // if(result) {
    //   alert("중복되는 ID는 입력할수 없습니다");
    //   return;
    // }

    const newMovie = {id: parseInt(id), title, genre, releaseDate };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };
  //3
  return (
  <BrowserRouter>
  <ul>
    <li>
      <Link to="/">List</Link>
    </li>
    <li>
    <Link to="/create">Add New Movie</Link>
    </li>
  </ul>
   <Routes>

      <Route path="/" element={<Home list={movies} deleteMovie={deleteMovie} />} />
      <Route path="/create" element={<Create addMovie={addMovie} />} />
    </Routes> 
    </BrowserRouter>
  )
};




export default App;
