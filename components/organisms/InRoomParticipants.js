import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';

const InRoomParticipantsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height:fit-content;
    border : 1px radius black;
    overflow:auto;
    margin-bottom:3.1875rem;
`

const InRoomParticipantsRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    width:80%;
    height:fit-content;
    margin-bottom:1.49375rem;
`

const InRoomParticipantWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    text-align:center;
    width:fit-content;
    height:fit-content;
`
const ProfileImg = styled.div`
    width: 80%;
    height: 9.06875rem;
    border-radius: 0.625rem;
    border : 0.1rem solid #61b28f;
    background-color: #ffffff;
    overflow:auto;
    margin-bottom:0.5rem;
`
const MyProfileImg = styled.div`
    width: 80%;
    height: 9.3125rem;
    border-radius: 0.625rem;
    border : 0.1rem solid #61b28f;
    background-color: #61b28f;
    overflow:auto;
    margin-bottom:0.5rem;
`

const InRoomInfo = () => {
    return (
        <InRoomParticipantsWrapper>
            <InRoomParticipantsRow>
                <InRoomParticipantWrapper>
                    <MyProfileImg>
                        <Text width={8} height={1.375} size={0.9375} weight={'bold'} align={'left'} color={'#ffffff'} position={'relative'} top={0.4}>
                        유인, 21</Text>
                        <Text width={8} height={1.125} size={0.9375} weight={'normal'} align={'right'} color={'#ffffff'} position={'relative'} top={5.625}>
                        홍익대학교</Text>
                    </MyProfileImg>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58} mtop={0.5}>
                    #시각디자인과 #운동 #요리</Text>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58}>
                    #친해져요 #cjiwxx</Text>
                </InRoomParticipantWrapper>
                <InRoomParticipantWrapper>
                    <ProfileImg>
                    <Text width={8} height={1.375} size={0.9375} weight={'bold'} align={'left'} color={'#2e9267'} position={'relative'} top={0.4}>
                        멍뭉, 23</Text>
                    <Text width={8} height={1.125} size={0.9375} weight={'normal'} align={'right'} color={'#2e9267'} position={'relative'} top={5.625}>
                        서강대학교</Text>
                    </ProfileImg>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58} mtop={0.5}>
                    #철학과 #잡생각 #독서</Text>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58}>
                    #친목다지기 #너모좋아</Text>
                </InRoomParticipantWrapper>
            </InRoomParticipantsRow>
            <InRoomParticipantsRow>
                <InRoomParticipantWrapper>
                    <ProfileImg>
                    <Text width={8} height={1.375} size={0.9375} weight={'bold'} align={'left'} color={'#2e9267'} position={'relative'} top={0.4}>
                        얼굴천재, 24</Text>
                    <Text width={8} height={1.125} size={0.9375} weight={'normal'} align={'right'} color={'#2e9267'} position={'relative'} top={5.625}>
                        서강대학교</Text>
                    </ProfileImg>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58} mtop={0.5}>
                    #경제학과 #신용불량 #궁핍</Text>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58}>
                    #볼링 #처돌이</Text>
                </InRoomParticipantWrapper>
                <InRoomParticipantWrapper>
                    <ProfileImg>
                    <Text width={8} height={1.375} size={0.9375} weight={'bold'} align={'left'} color={'#2e9267'} position={'relative'} top={0.4}>
                        화연, 22</Text>
                    <Text width={8} height={1.125} size={0.9375} weight={'normal'} align={'right'} color={'#2e9267'} position={'relative'} top={5.625}>
                        이화여자대학교</Text>
                    </ProfileImg>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58} mtop={0.5}>
                    #컴퓨터공학과 #의지박약</Text>
                    <Text width={8.75} height={1.7} size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.58}>
                    #개발자 #밤샘</Text>
                </InRoomParticipantWrapper>
            </InRoomParticipantsRow>
        </InRoomParticipantsWrapper>
    );
  }
  
export default InRoomInfo