import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Start from '../../atoms/buttons/texts/start';

const GotoLogin = () => {
    return(
        <Link href='/main'><a style={{textDecoration:'none'}}>
            <Start></Start>
        </a></Link>
    );
}

export default GotoLogin;