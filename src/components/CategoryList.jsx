import React, { useEffect, useState } from 'react';
import Category from './Category';
import { CiMoneyCheck1 } from "react-icons/ci";
const CategoryList = () => {
    const [categroies, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    if(!categroies){
        console.log("nothing get")
    }
    // console.log(categroies);
    return (
        <div className='flex justify-around items-center m-4'>
            {
                categroies.map(it=><Category category_name={it.category_name} availability={it.availability} />)
            }
        </div>
    );
};

export default CategoryList;