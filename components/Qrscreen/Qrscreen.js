import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

import QRcodeImage from '../QrcodeImage/QRcodeImage';
import styles from "./Qrscreen.style";
import Timer from '../Timer/Timer';
import { useSelector } from 'react-redux';

const Qrscreen = (props) => {

    const type = useSelector(state => state.timer.type)


    return (
       <View style={styles.container}>
           <Text style={styles.title}>{type === 'entry' ? "Вход" : "Выход"}</Text>
           <Text style={styles.subtitle}>Время до обновления QR-кода</Text>
            <Timer />
           <View style={styles.qr_container}>
               <QRcodeImage/> 
           </View>
       </View>
    )
}

export default React.memo(Qrscreen);
