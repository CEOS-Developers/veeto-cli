import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'

import EnterRoomByDate from '../organisms/EnterRoomByDate';

const EnterRoomModal = (props) => {
    const icon = () =>{
        if(props.activity===1){
            return(<Bowling src={'/bowling.png'}/>);
        }
        else if(props.activity===2){
            return(<BoardGame src={'/boardGame.png'}/>);
        }
        else if(props.activity===3){
            return(<EscapeRoom src={'/escapeRoom.png'}/>);
        }
    }

    //액티비티 선택 화면에서 모달이 클릭되었을 때
    const fullDate = props.fullDate;
    let fMonth, fDate, fYear;
    let receivedDate;
    let refinedMonth, refinedDate;
    if(props.fullDate){
        fYear = fullDate.getFullYear(); //년
        fMonth = fullDate.getMonth()+1; //월
        fDate = fullDate.getDate(); //일

        if(fMonth.toString().length===1){
            refinedMonth = '0'+fMonth.toString();
        }
        else{
            refinedMonth = fMonth.toString();
        }
        if(fDate.toString().length===1){
            refinedDate = '0'+fDate.toString();
        }
        else{
            refinedDate = fDate.toString();
        }
        receivedDate = fYear.toString()+'-'+refinedMonth+'-'+refinedDate;
    }
    //날짜 선택 화면에서 모달이 클릭되었을 때
    else if(props.queryDate){
      receivedDate = props.queryDate;
    }

    return (
      <React.Fragment>
          {props.isModalOpen && (
              <>
                         <ModalOverLay/>
                         <Modal>
                         <EnterRoomByDate queryDate={props.queryDate} updateQueryDate={props.updateQueryDate} fullDate={props.fullDate} activity={props.activity} time={props.time}></EnterRoomByDate>
                         
                         <Link href={{ pathname: 'hi', query: { date:`${receivedDate}`, time:`${props.time}`, activity:`${props.activity}`}}}><a>
                            <ApplyButt><div>참여 신청하기</div></ApplyButt>
                         </a></Link>
                         </Modal>
                            <CloseButt onClick={props.onClick}>X</CloseButt>
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
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85.9%;
    height:fit-content;
    border-radius: 1.6rem;
    background-color: #d0eae1;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.35);
    -webkit-backdrop-filter: blur(3rem);
    backdrop-filter: blur(3rem);

    padding-top:0.8rem;
  `

  const ApplyButt = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:1.3rem;
    margin-bottom:1.4rem;

    width: 23.9rem;
    height: 3.8rem;
    border-radius: 2rem;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
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

  const CloseButt = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    opacity:1;

    position: fixed;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3rem;
    width: 4.8rem;
    height: 4.8rem;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color:#ffffff;
    
    -webkit-backdrop-filter: blur(3rem);
    backdrop-filter: blur(3rem);
    font-size:3rem;
    color:#2e9267;
  `

  const Bowling = styled.img`
    width:5.8rem;
    height:5.8rem;
`
const BoardGame = styled.img`
    width:5.8rem;
    height:5.8rem;
`
const EscapeRoom = styled.img`
    width:5.8rem;
    height:5.8rem;
`

  export default EnterRoomModal;