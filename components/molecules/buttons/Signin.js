import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Signin from '../../atoms/buttons/texts/signin';

const login = () => {
    return(
        <Link href='/hi'><a style={{textDecoration:'none'}}>
            <Signin></Signin>
        </a></Link>
    );
}

export default login;