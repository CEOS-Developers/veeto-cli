import React, { useState, Component } from 'react';

import SimpleInfo from '../molecules/buttons/SimpleInfo';

const RoomListByDate = (props) => {
    return (
                    <SimpleInfo queryDate={props.queryDate} updateQueryDate={props.updateQueryDate} fullDate={props.fullDate} activity={props.activity} time={props.time}></SimpleInfo>
    );
  }
  
export default RoomListByDate