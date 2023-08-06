import ToDo from "../ToDo";
import { Reorder } from "framer-motion";

import {deleteToDo, checkToDo} from "../../utils/HandleApi";

import './List.css';

const List = ({setIsUpdating, setToDoId, setTitle, setText, toDoId, toDo, setToDo}) => {

    const updateMode = (id, text, title) => {
        if(id !== toDoId) {
          setIsUpdating(true)
          setTitle(title)
          setText(text)
          setToDoId(id)
        } else {
          setTitle("")
          setText("")
          setToDoId("")
          setIsUpdating(false)
        }
      }

    return (
    <div className="list">
        <Reorder.Group as="div" onReorder={setToDo} values={toDo} axis="y">
        {toDo.map((item) => <ToDo
            key={item.id}
            item={item}
            checkToDo={() => checkToDo(item.id, !item.checked, setToDo)}
            updateMode = {() => updateMode(item.id, item.text, item.title)}
            deleteToDo = {() => deleteToDo(item.id, setToDo)}
        />)}
        </Reorder.Group>
    </div>
    )
}

export default List