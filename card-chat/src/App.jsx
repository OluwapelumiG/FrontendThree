import { useState } from 'react'
import Card from './components/Card';
import { Heading, Paragraph } from './components/Text';

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  function addMessage(){
    const newMessage = [...messages, message];
    setMessages(
      newMessage
    );
    setMessage('');
  }

  return (
    <div className='flex flex-col max-w-4xl mx-auto p-20'>
      <Heading />

      <Paragraph />

      <div className='grid grid-cols-3 space-x-4 space-y-2 my-10'>
        {
          messages.map((msg, idx) => (

            <Card message={msg} index={idx} />

          ))
        }
      </div>

      <div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='border-1 border-black w-full rounded-md' ></textarea>
        <button onClick={addMessage} className='bg-blue-300 rounded-md px-4 py-2'>Add</button>
      </div>
    </div>
  )
}

export default App
