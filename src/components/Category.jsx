import React from 'react';

const Category = ({category_name,availability,}) => {
    return (
        <div className=' w-fit rounded-md px-4 py-2 text-center border bg-gray-100'>
            <h4 className='text-xl font-bold text-gray-500'>{category_name}</h4>
            <h4 className='text-lg text-gray-600'>{availability}</h4>
        </div>
    );
};

export default Category;