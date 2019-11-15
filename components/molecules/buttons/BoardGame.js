import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import BoardGame from "../../atoms/buttons/icons+text/boardGame";

const BoardGameText = () => {
    return (
        <Link href='/RoomsChooseAct'><a>
            <BoardGame></BoardGame>
        </a></Link>
    );
  }

export default BoardGameText