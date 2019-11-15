import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Enter from '../../atoms/buttons/texts/enter';
import Preview from '../../atoms/buttons/texts/preview';

const enter = () => {
    return(
        <Link href='/inroom'><a style={{textDecoration:'none'}}>
            <Enter></Enter>
        </a></Link>
    );
}

export default enter;