import React from 'react';
import SocialMedias from './components/social';
import MyTable from './components/table';

export default function Home1() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-violet-500 font-bold text-4xl'>Viva Santana!</h1>
            <SocialMedias />
            <MyTable />
        </div>
    );
}