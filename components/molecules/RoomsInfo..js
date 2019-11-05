import React from 'react'
import styled from 'styled-components'

import {useDataApi} from '../../lib/hooks'
import { isFunction } from 'util';

import Text from '../atoms/Text';

export default function RoomsInfo (props) {
    const {date, activity} = props;
    const [{data, isLoading, isError}, doFetch] = useDataApi(`http://ec2-18-191-248-241.us-east-2.compute.amazonaws.com:8000/api/roomList?year=${date.year}&month=${date.month}&day=${date.day}&pk=${activity}`);
    
  if(isLoading) {
    return (<div>loading...</div>)
 }
 if(isError) {
   return (<div>error!</div>)
 }
 if(data) {
     console.log(data);
    return (<Wrapper>
        <div>
            <Text style={{width:'91.7%'}}>{day}</Text>
            <RoomsInfoWrapper>

            </RoomsInfoWrapper>
        </div>
    </Wrapper>)
 }
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:91.7%;
    height: 8.625rem;
    border-radius: 1rem;
    background-color: #d0eae1;
`
const RoomsInfoWRapper = styled.div`

`