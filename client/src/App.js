import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = async () => {
        const response = await fetch("https://todo-list-backend-7qfv.onrender.com/todo", {
            method: 'POST',
            body: JSON.stringify({ item: input }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            alert("Item was inserted");
            fetchData(); // Fetch the data again to update the list
        }
    };

    const fetchData = async () => {
        const response = await fetch("https://todo-list-backend-7qfv.onrender.com/todo");
        const data1 = await response.json();
        setData(data1);
    };
    const handledelete = async (item) =>{
      const response=await fetch("https://todo-list-backend-7qfv.onrender.com/todo",{
        method:'DELETE',
        body:JSON.stringify({item:item}),
        headers: {
          'Content-Type': 'application/json',
      },
      });
      if(response.ok)
        {
          alert("item is deleted");
          fetchData();
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <div className="task-list">
                {data.map((item, i) => (
                    <div key={i} className="task-item">
                        <h3>{item.item}</h3>
                        <button onClick={()=>handledelete(item.item)}>DELETE</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
