import React from 'react';

//Components
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Header from '../../Components/Header/Header';

function NoMatch() {
    return (
        <>
            <Header />
            <Breadcrumb />
            <h1>Sorry no match</h1>
        </>
    )
}

export default NoMatch;