import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import styles from "./QrcodeImage.styles";
import { Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;

const QRcodeImage = (props) => {
    
    const currentHashURL = useSelector(state => state.timer.currentHashURL);
    console.log(currentHashURL);
    return( <QRCode style={styles.qr_image}
                value = {currentHashURL}
                size={Math.floor(deviceWidth)-100}
            /> )
}

export default React.memo(QRcodeImage);