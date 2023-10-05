import { useState } from "react";
import './App.css';
// 6
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// 1
const Home = ({list, deleteMessage}) => {
  return(
    <>
      <h1>Messages</h1>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th width="80">Writer</th>
          <th>Message</th>
          <th width="120">Write Date</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.writer}</td>
              <td>{item.content}</td>
              <td>{item.writeDate}</td>
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
const Create = ({addMessage}) => {
  //8
  const [id, setId] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [writeDate, setWriteDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

      //9 
    if(id === "" || writer === "" || content === "" || writeDate === "") {
      alert("모든 입력값을 반드시 입력해야 합니다");
      return;
    }
    //9

    addMessage(id, writer, content, writeDate);
    setId("");
    setWriter("");
    setContent("");
    setWriteDate("");
  };
  //8

  return (
  <>
    <h1>Create Message</h1>
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="Input message id" value={id} onChange={(e) => setId(e.target.value)} 
        />
      </div>
      <div>
      <input type="text" placeholder="Input message writer" value={writer} onChange={(e) => setWriter(e.target.value)}  />
      </div>
      <div>
      <input type="text" placeholder="Input message content" value={content} onChange={(e) => setContent(e.target.value)}  />
      </div>
      <div>
        <label>작성일 : </label>
        <input type="date" value={writeDate} onChange={(e) => setWriteDate(e.target.value)} />
      </div>
      <input type="submit" value="Add Message" />
    </form>
  </>)
};
const App = () => {

   // 3, 7
   const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Message 1",
      writer: "Writer 1",
      writeDate: "2022-01-01",
    },
    {
      id: 2,
      title: "Message 2",
      writer: "Writer 2",
      writeDate: "2022-02-01",
    },
    {
      id: 3,
      title: "Message 3",
      writer: "Writer 3",
      writeDate: "2022-03-01",
    },
    //7
   ]);

   const addMessage = (id, writer, content, writeDate) => {
    // 10. 중복 ID 입력 불가
    for(const item of messages) {
      if(item.id === parseInt(id)) {
        alert("중복되는 ID는 입력할수 없습니다");
        return;
      }
    }

    const newMessage = {id: parseInt(id), writer, content, writeDate };
    setMessages([...messages, newMessage]);
  };

  const deleteMessage = (id) => {
    const newList = messages.filter((item) => item.id !== parseInt(id));
    setMessages(newList);
  };
  //3
  return (
  <BrowserRouter>
  <ul>
    <li>
      <Link to="/">List</Link>
    </li>
    <li>
    <Link to="/create">Add New Message</Link>
    </li>
  </ul>
   <Routes>

      <Route path="/" element={<Home list={messages} deleteMessage={deleteMessage} />} />
      <Route path="/create" element={<Create addMessage={addMessage} />} />
    </Routes> 
    </BrowserRouter>
  )
};




export default App;
