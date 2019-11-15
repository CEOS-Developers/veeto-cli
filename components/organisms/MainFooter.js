import React, { Component } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Link from 'next/link'
import Text from '../atoms/Text';
import { sizeHeight, fontSize } from '@material-ui/system';

const MainFooterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    overflow:auto;
`
const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      width:'80%',
      fontSize:'1rem',
      padding: theme.spacing(12, 4, 18),
    },
  }));
  
const options = ['날짜', '11/01(금)', '11/02(토)','11/03(일)','11/04(월)','11/05(화)','11/06(수)','11/07(목)'];

const MainFooter = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [bopen, setBOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleClick = () => {
      alert(`You clicked ${options[selectedIndex]}`);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setBOpen(false);
    };
  
    const handleToggle = () => {
      setBOpen(prevOpen => !prevOpen);
    };
  
    const handleBClose = event => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setBOpen(false);
    };
  
    return (
        <MainFooterWrapper>
        <div>
        <button type="button" onClick={handleOpen}>
            react-transition-group
        </button>
        <div style={{textAlign:'center'}}>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title"></h2>
                <p id="transition-modal-description">

                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <ButtonGroup style={{height:'fit-content', padding:'0.1rem'}} variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                        <Button style={{height:'fit-content', padding:'0.1rem'}} onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                            style={{height:'fit-content', padding:'0.1rem'}}
                            color="primary"
                            aria-controls={bopen ? 'split-button-menu' : undefined}
                            aria-expanded={bopen ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                        </ButtonGroup>
                        <Popper open={bopen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleBClose}>
                                <MenuList id="split-button-menu">
                                    {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        disabled={index === 2}
                                        selected={index === selectedIndex}
                                        onClick={event => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                    ))}
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </Grid>
                    
                    </Grid>
                </p>
            </div>
            </Fade>
        </Modal>
        </div>
        </div>
{/* 

            <Link href="/inroom"><a>
                <Text size={0.75} width={14.625} height='1rem' weight={300} align={'center'} color={'#ffffff'} bordr={1.75} bcolor={'#61b28f'} lineheight={4}>
                   방 만들기
                </Text>
                </a></Link> */}
        </MainFooterWrapper>
    );
  }
  
export default MainFooter