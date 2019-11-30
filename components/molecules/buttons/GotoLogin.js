import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Login from '../../atoms/buttons/texts/login';

const GotoLogin = () => {
    return(
        <Link href='/login'><a style={{textDecoration:'none'}}>
            <Login></Login>
        </a></Link>
    );
}

export default GotoLogin;