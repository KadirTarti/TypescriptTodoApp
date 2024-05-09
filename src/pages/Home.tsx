import { Container, Typography } from '@mui/material'
import AddTodoComp from '../components/AddTodoComp'
import TodoList from '../components/TodoList'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { SweetAlertIcons, SweetPosition, notify } from '../helper/notify';


//^bunu globalde types dosyasında tanımladığımız için burada yoruma aldık
// interface ITodoType {
//     task: string;
//     isDone: boolean;
//     id: string | number;
// }

const url = 'https://663b86e7fee6744a6ea1f7e8.mockapi.io/api/todos/todos';

const Home = () => {
  

    // const [todos, setTodos] = useState([] as ITodoType [])
    // const [todos, setTodos] = useState<Array<ITodoType>>([])
    const [todos, setTodos] = useState<ITodoType[]>([]) //^ yaygın kullanım!

    const getTodos = async () => {
        try {
            const {data} = await axios<ITodoType[]>(url)
            setTodos(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    //^*function type tanımlama 1.yol
    // const addTodo = async (text:string) => {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    //^*function type tanımlama 2.yol
    // type addFunc = (text:string) => Promise<void>;
    const addTodo:addFunc = async (text) => {
        try {
            await axios.post(url, {task:text, isDone:false})
            notify('To-Do created! :)', SweetAlertIcons.SUCCESS, SweetPosition.Center)
            getTodos()
        } catch (error) {
            console.log(error)
            notify('To-Do can not created! :(', SweetAlertIcons.ERROR, SweetPosition.BottomEnd)
        }
    }

    const toggleTodo : ToggleFn = async (todo) => {
        try {
            await axios.put(`${url}/${todo.id}`,{...todo,isDone:!todo.isDone})
            notify('To-Do updated!', SweetAlertIcons.SUCCESS, SweetPosition.Center)
        } catch (error) {
            console.log(error)
            notify('To-Do can not updated! :(', SweetAlertIcons.ERROR, SweetPosition.TopStart)
        }finally {
            getTodos()
        }
    }

    const deleteTodo : DeleteFn = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)
            notify('To-Do DELETED!', SweetAlertIcons.SUCCESS, SweetPosition.Center)
        } catch (error) {
            console.log(error)
            notify('To-Do con not deleted!', SweetAlertIcons.ERROR, SweetPosition.TopStart)
        }finally {
            getTodos()
        }
    }


    useEffect(()=>{
        getTodos()
    },[])
    
    return (
    <Container>
        <Typography align='center' color='secondary' variant='h3' margin={5} component='h1'>
            Typescript To-Do App
        </Typography>
        <AddTodoComp addTodo={addTodo}/>
        <TodoList toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos}/>
    </Container>
  )
}

export default Home