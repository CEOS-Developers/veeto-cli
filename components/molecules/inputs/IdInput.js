import React from 'react';
import styled from 'styled-components';

const idInput = (props) => {

    return (
                <IdInput type="text" name="id" placeholder="아이디"/>
    );
  }

const IdInput= styled.input`
    width: 81.6%;
    height: 3.5rem;
    border:none;
    border-radius: 2rem;
    background-color: #dbf2ea;

    opacity: 0.55;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;

    :focus{
        outline:none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #2e9267;
      font-weight: normal;
    }
    :-ms-input-placeholder {
       color: #2e9267;
       font-weight: normal;
    }

    margin-bottom:1rem;
`

export default idInput