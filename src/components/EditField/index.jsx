import {addToDo, updateToDo} from "../../utils/HandleApi";

import './EditField.css';

const EditField = ({isUpdating, setIsUpdating, text, title, setTitle, setText, toDoId, setToDo}) => {

    return (
        <div className="text_wrapper">
        <input type="text"
               placeholder="Название..."
               value={title}
               className="title"
               onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            type="text"
            placeholder="Описание задачи..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <div
            className="add"
            onClick={isUpdating ?
                () => updateToDo(toDoId, text, setToDo, title, setTitle, setText, setIsUpdating)
                : () => addToDo(text, title, setTitle, setText, setToDo)}>
          {isUpdating ? "Подтвердить" : "Добавить"}
        </div>
      </div>
    )
}

export default EditField