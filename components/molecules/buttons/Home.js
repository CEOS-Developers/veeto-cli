import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import LeavesIcon from "../../atoms/buttons/icons/home";

const Drawer = () => {
    return (
            <Link href='/'>
                <a>
                    <LeavesIcon></LeavesIcon>
                </a>
            </Link>
    );
  }
  
export default Drawer