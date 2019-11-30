import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoMain from '../../atoms/buttons/texts/gotoMain';

const gotomain = () => {
    return(
        <Link href='/main'><a style={{textDecoration:'none'}}>
            <GotoMain></GotoMain>
        </a></Link>
    );
}

export default gotomain;