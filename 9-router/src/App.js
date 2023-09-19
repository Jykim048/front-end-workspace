import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Home = ({ list, deleteBeverage }) => {
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>음료명</th>
          <th>설명</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>
              <button onClick={onClick} id={item.id}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const Create = ({ addBeverage }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addBeverage(title, desc);
    navigate("/");
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <h2>음료 추가</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">음료명:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="음료명 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">설명:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder="설명 입력"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <input type="submit" value="추가" />
      </form>
    </div>
  );
};
const App = () => {
  const [id, setId] = useState(3);
  const [beverages, setBeverages] = useState([
    {
      id: 1,
      title: "여수 윤슬 헤이즐넛 콜드브루",
      desc: "윤슬을 형상화한 헤이즐넛 콜드브루",
    },
    {
      id: 2,
      title: "아이스 오렌지 판타지 유스베리 티",
      desc: "상큼한 오렌지와 유스베리, 얼그레이 티의 조화",
    },
  ]);
  const addBeverage = (title, desc) => {
    const newBeverage = { id, title, desc };
    setId(id + 1);
    setBeverages([...beverages, newBeverage]);
  };
  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };
  return (
    <BrowserRouter>
      <div>
        <h1>Cafe</h1>
        <ul>
          <li>
            <Link to="/">목록</Link>
          </li>
          <li>
            <Link to="/create">추가</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={<Home list={beverages} deleteBeverage={deleteBeverage} />}
          />
          <Route
            path="/create"
            element={<Create addBeverage={addBeverage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;