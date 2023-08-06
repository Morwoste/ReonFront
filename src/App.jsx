import { useEffect, useState } from "react";

import Search  from "./components/Search";
import List  from "./components/List";
import EditField  from "./components/EditField";

import {getAllToDo, searchToDo} from "./utils/HandleApi";

const App = () => {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [search, setSearch] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    if (search === "") {
      getAllToDo(setToDo)
    } else {
      searchToDo(search, setToDo)
    } 
  }, [search])

  return (
    <div className="App">
      <div className="container_wrapper">
        <div className="container">
          <div className="left_block">
            <div className="top">
              <div className="logo_wrapper">
                <h1 className="logo">REON <br/> TODO</h1>
              </div>
            </div>
            <Search setSearch={setSearch}/>
            <div className="list_wrapper">
              <List 
                setIsUpdating={setIsUpdating} 
                setToDoId={setToDoId} 
                setTitle={setTitle} 
                setText={setText} 
                toDoId={toDoId} 
                toDo={toDo} 
                setToDo={setToDo}
              />
            </div>
          </div>
          <div className="right_block">
            <EditField 
              isUpdating={isUpdating} 
              setIsUpdating={setIsUpdating} 
              text={text} title={title} 
              setTitle={setTitle} 
              setText={setText} 
              toDoId={toDoId} 
              setToDo={setToDo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
