import {useState, useEffect} from 'react'
import React from 'react';
import Tasks from './tasks'
const Home = () => {
    const arr=localStorage.getItem('task')?JSON.parse(localStorage.getItem("task")
    ):[];
    const [task,setTask]= useState(arr);
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    console.log(title,description)
    const submitHandler =(e)=>
    {
        e.preventDefault();

        setTask([...task,{title,description},])
        setTitle("");
        setDescription("");
    }
    const deleteTask=(index)=>
    {
        const filterArr= task.filter((val,i)=>
        {
            return i!==index;
        })
        setTask(filterArr);
    }
    useEffect(()=>{
        localStorage.setItem("task", JSON.stringify(task))
    },[task])
return <div className='todohome'>
    <h1>Todo</h1>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder='Discription'  value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type='submit'>ADD</button>
    </form>
    {task.map((item, index)=>(<Tasks key={index} title={item.title} description={item.description}
     deleteTask={deleteTask} index={index}/>))}
</div>
}

export default Home