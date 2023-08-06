import axios from 'axios'

const baseUrl = "http://localhost:9000/api"

const getAllToDo = (setToDo) => {
    axios
        .get(`${baseUrl}/show/todos`)
        .then(({ data }) => {
            setToDo(data)
        })
}

const addToDo = (text, title, setTitle, setText, setToDo ) => {
    if(title) {
        axios
            .post(`${baseUrl}/create/list`, { title, text })
            .then((data) => {
                setTitle("")
                setText("")
                getAllToDo(setToDo)
            })
            .catch((err) => console.log(err))
    } else {
        alert("Введите заголовок задания")
    }


}

const checkToDo = (toDoId, checker, setToDo) => {
    console.log(555, checker)

    axios
        .put(`${baseUrl}/check?id=${toDoId}`, { checked:checker })
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
const updateToDo = (toDoId, text, setToDo, title, setTitle, setText, setIsUpdating) => {

    axios
        .put(`${baseUrl}/update?id=${toDoId}`, { title, text })
        .then((data) => {
            setTitle("")
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
const searchToDo = (text, setToDo) => {

    axios
        .post(`${baseUrl}/search`, { text })
        .then(({ data }) => {
            setToDo(data)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (id, setToDo) => {
    console.log(id)

    axios
        .delete(`${baseUrl}/delete?id=${id}`)
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo, searchToDo, checkToDo }