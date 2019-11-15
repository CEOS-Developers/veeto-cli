import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import DrawerIcon from "../../atoms/buttons/icons/drawer";

const Drawer = () => {
    return (
            <Link href='/'>
                <a>
                    <DrawerIcon></DrawerIcon>
                </a>
            </Link>
    );
  }
  
export default Drawer