import React from 'react';
import SocialMedias from './components/social';
import MyTable from './components/table';

export default function Home1() {
    return (
        <div className="home">
            <h2>Viva Santana!</h2>
            <SocialMedias />
            <MyTable />
        </div>
    );
}