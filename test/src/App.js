import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";


const Home = ({ List, AddNewMovie }) => {
  const onClick = (event) => {
  };
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {List.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.releasedate}</td>
            <td>
              <button onClick={onClick} id={item.id}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const Create = ({ AddNewMovie }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    AddNewMovie(id, title, genre);
    navigate("/");
    setTitle("");
  };
}

export default Home;
