
import './App.css';
import {useEffect, useState} from "react";


function App(){
 const [data,setData] = useState([]);
 const [input, setInput] = useState("");
 const [output, setOutput] = useState([]);

 useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/todos")
       .then(res => res.json())
       .then(res => setData(res))
 }, []);

 useEffect(() => {
   setOutput([])
     data.filter(val => {
       if(input === "") {
         setOutput([])
       }else if (val.title.toLowerCase().includes(input.toLowerCase())){
           setOutput(output => [...output, val])
       }
     })
 }, [input]);
  return (
    <div className="App">

    <div>
     <input onChange={(e) => setInput(e.target.value)}
       type= "text"
       placeholder = "Search..."
     />
    </div>


        <div>
            {output.map(({title, id}) => (
                <p key = {id}> {title} </p>
            ))}
        </div>

    </div>
  );
}

export default App;
