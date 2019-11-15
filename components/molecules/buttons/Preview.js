import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Preview from '../../atoms/buttons/texts/preview';

const enter = () => {
    return(
        <Link href='/inroom'><a style={{textDecoration:'none'}}>
            <Preview></Preview>
        </a></Link>
    );
}

export default enter;