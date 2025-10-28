import { useState } from 'react'
import './App.css'

function App() {
  const [ newItem, setNewItem ] = useState('')
  const [ editing, setEditing ] = useState(null);

  const [ editItem, setEditItem ] = useState('');
  const [ editStatus, setEditStatus ] = useState('');

  const [ todoList, setTodoList ] = useState([
    {
      'item': 'Start Yesterday',
      'status': 'done'
    },
    {
      'item': 'Start Today',
      'status': 'active'
    },
    {
      'item': 'Start Tomorow',
      'status': 'pending'
    }
  ])

  function addTodo(){
    const newTodo = [
      ...todoList,
      {
        'item': newItem,
        'status': 'pending'
      }
    ]

    setTodoList(newTodo);
  }

  function removeTodo(index){
    alert("Do you really want to delete??")
    const newTodo = todoList.filter((a, filterIndex) => filterIndex !== index);
    setTodoList(newTodo);
  }

  function openEdit(index){
    // const todoEdit = todoList.filter((b, todoIndex) =>  todoIndex == index);
    const todoEdit = todoList[index];
    setEditItem(todoEdit.item);
    setEditStatus(todoEdit.status);

    setEditing(index);
  }

  function saveEdit(){
    const newList = todoList.map((todo, index) =>
      editing == index ? { item: editItem, status: editStatus } : todo
    )

    setTodoList(newList);
    setEditing(null);
    setEditItem('')
    setEditStatus('')
  }
  
  return (
    <div className='max-w-4xl mx-auto space-y-2 flex flex-col py-4 bg-gray-50 rounded-md mt-20'>
      <h2 className='text-center text-4xl'>Todo List using LocalStorage</h2>
      <div className='bg-gray-200 px-10 py-4 rounded-md m-10 space-x-2' >
        <input onChange={(e)=> setNewItem(e.target.value)} className='w-[80%] py-4 px-2 bg-white rounded-md' />
        <button onClick={addTodo} className='w-[10%] bg-green-400 px-4 py-4 rounded-md'>Add</button>
      </div>

      <div className='bg-gray-200 px-10 py-4 rounded-md m-10 space-x-2'>
        <h3>Editing: {editing}</h3>
        <table className='w-full text-center'>
          <thead className='bg-gray-500 text-white w-full'>
            <tr>
              <th>#</th>
              <th className='w-auto'>Item</th>
              <th className='w-auto'>Status</th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
            {
              todoList.map((todo, index)=> (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>
                    {(editing == index) ? (
                      <input className='border-1 border-gray-800 px-4 py-2' onChange={(e) => setEditItem(e.target.value)} value={editItem} />
                    )
                    :
                    (
                      <>{todo.item}</>
                    )
                  }</td>
                  <td>
                    {(editing == index) ? (
                      <select className='border-1 border-gray-800 px-4 py-2' defaultValue={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                        <option value={'pending'}>Pending</option>
                        <option value={'active'}>Active</option>
                        <option  value={'done'}>Done</option>
                      </select>
                    ):(
                      <span>{todo.status}</span>
                    )}
                    </td>
                  <td className='space-x-2'>
                    {(editing == index) ? (
                      <button onClick={() => saveEdit()} className='text-green-700'>Save</button>
                    ): (
                      <button onClick={() => openEdit(index)} className='text-yellow-700'>Edit</button>
                    )}
                    
                    <button onClick={
                      () => { 
                        if(confirm("Are you sure you want to delete?")){
                          removeTodo(index)
                        } 
                      }
                    }
                    className='text-red-700'>Delete</button>
                  </td>
                </tr>
              ))
            }
            
                
             
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
