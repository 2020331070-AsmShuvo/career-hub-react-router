import React from 'react';
import Banner from './Banner';
import CategoryList from './CategoryList';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='text-center my-4'>
                <h2 className='text-3xl font-semibold'>Job Category List</h2>
                <p className='text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <CategoryList/>
        </div>
    );
};

export default Home;