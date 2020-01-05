import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const RewriteModal = (props) => {

    return (
      <React.Fragment>
          {props.isPModalOpen && (
              <>
                         <ModalOverLay/>
                         <Modal>
                        <Alert>개인정보 수집에 동의해주세요.</Alert>
                        <CloseButt onClick={props.onClick}><div>확인</div></CloseButt>
                         </Modal>
              </>
    )}
      </React.Fragment>
    )
  }

  const ModalOverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity:0.5;
    background-color: #d9d9d9;
  `

  const Modal = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    opacity:1;

    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85.9%;
    height:fit-content;
    border-radius: 2.1rem;
    box-shadow: 0 0.3rem 0.7rem 0 rgba(0, 0, 0, 0.4);
    background-color: #61b28f;
  `

  const Alert = styled.div`
    width: fit-content
    height: fit-content
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-top:2.2rem;
    margin-bottom:2.3rem;
  `

  const CloseButt = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center:
    align-items:center;
    margin-bottom:1.4rem;

    width: 23.9rem;
    height: 3.8rem;
    border-radius: 2rem;
    box-shadow: 0 1px 0.6rem 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;

    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
  `

  export default RewriteModal;