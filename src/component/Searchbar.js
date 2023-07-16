import { useState } from "react";
import './searchbar.css';



function Searchbar({onSubmit}){
    const[term,setchange]=useState('');
    const handleformat=(event)=>{
        event.preventDefault();
        onSubmit(term);

    };
    const handlechange=(event)=>{
        setchange(event.target.value);

    };
    return(
        <div className="search-bar">
        <form onSubmit={handleformat}>
            <label>Enter search Images</label>
            <input value={term} onChange={handlechange}></input>
        </form>
        </div>
    )
}
export default Searchbar;