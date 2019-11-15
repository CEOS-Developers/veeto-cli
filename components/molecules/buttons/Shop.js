import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import ShopIcon from "../../atoms/buttons/icons/shop";

const Shop = () => {
    return (
            <Link href='/'>
                <a>
                    <ShopIcon></ShopIcon>
                </a>
            </Link>
    );
  }
  
export default Shop