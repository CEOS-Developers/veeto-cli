import React, { useState, Component } from 'react';
import Link from 'next/link'
import BackToTutorial from '../../atoms/buttons/icons+text/backToTutorial';

const enter = () => {
    return(
        <Link href='/'><a style={{textDecoration:'none'}}>
            <BackToTutorial></BackToTutorial>
        </a></Link>
    );
}

export default enter;