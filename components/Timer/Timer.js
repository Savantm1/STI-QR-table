import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Timer.styles'

const Timer = (props) => {

    const timerTime = useSelector(state => state.timer.timer);
   
    return (
        <View style={styles.timer_container}>
            <Text style={styles.counter}>
                {Math.floor(timerTime/60) < 10 ? `0${Math.floor(timerTime/60)}` : Math.floor(timerTime/60)}
            </Text>
            <Text style={styles.counter}> : </Text>
            <Text style={styles.counter}>
                {Math.floor(timerTime%60) < 10 ? `0${Math.floor(timerTime%60)}` : Math.floor(timerTime%60)}
            </Text>
        </View>
    )
}

export default Timer;
