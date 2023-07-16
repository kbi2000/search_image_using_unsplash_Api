import SearchBar from './component/Searchbar';
import searchImages from './api';
import Imagelist from './component/Imagelist';
import { useState } from 'react';


function App(){
    const[images,setImages]=useState([]);
    const handleSubmit = async(term)=>{
       const res= await searchImages(term);
       setImages(res);
       



    };
    return (<div><SearchBar onSubmit={handleSubmit}>
        </SearchBar>
        <Imagelist images={images}></Imagelist>
        </div>);
}
export default App;
