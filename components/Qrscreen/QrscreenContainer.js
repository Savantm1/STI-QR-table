import React, { useEffect, useState } from 'react'
import Qrscreen from './Qrscreen'
import hash_array from '../../hash_array';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, timerDecrement } from '../../Redux/TimerReducer';

const QrscreenContainer = () => {

    const dispatch = useDispatch();
    const currentHashURL = useSelector(state=>state.timer.currentHashURL);
    useEffect(() => {
        let id = setInterval(()=>{dispatch(timerDecrement())},1000)
        return () => {
            clearInterval(id);
        }
    }, [currentHashURL])

    return (
        <Qrscreen/>
    )
}


export default QrscreenContainer
