import {BiEdit} from "react-icons/bi"
import {AiFillDelete, AiOutlineHolder} from "react-icons/ai"
import { Reorder } from "framer-motion";

const ToDo = ({item, updateMode, deleteToDo, checkToDo}) => {
    return (
        <Reorder.Item as="div" value={item}>
        <div className="todo"  >
            <span>
                <AiOutlineHolder className='icon'/>
            </span>
            <div className="text" >{item.title}</div>
            <div className="icons">
                <input type="checkbox" checked={item.checked} onChange={checkToDo}/>
                <BiEdit title="Изменить" className='icon' onClick={updateMode} />
                <AiFillDelete title="Удалить" className='icon' onClick={deleteToDo} />
            </div>
        </div>
        </Reorder.Item>
    )
}

export default ToDo