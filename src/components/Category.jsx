import React from 'react';

const Category = ({category_name,availability,}) => {
    return (
        <div className='border w-fit rounded-md px-4 py-2 text-center bg-gray-700'>
            <h4 className='text-xl font-bold text-gray-400'>{category_name}</h4>
            <h4 className='text-lg text-gray-200'>{availability}</h4>
        </div>
    );
};

export default Category;