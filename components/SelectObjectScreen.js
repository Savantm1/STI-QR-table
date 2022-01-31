import React, { useRef, useState,useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './SelectObjectScreen.styles';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, timerDecrement,setSelectObject, setType } from '../Redux/TimerReducer';
import { getObjects } from '../Redux/ObjectsReducer';


const SelectObjectScreen = (props) => {

    const [selectObject, setSelectObjectOnComponent] = useState("27 - Офис");
    const pickerRef = useRef();

    const arrayObjects = useSelector(state => state.objects.objects);
    const type = useSelector(state => state.timer.type);
    const SelectObjectCode = useSelector(state => state.timer.selectObjectCode);

    const arrayObjectsElements = arrayObjects.map(elem=>{
        return (<SelectPicker.Item key={elem.code} style={styles.item} label={`${elem.code} - ${elem.name}`} value={`${elem.code} - ${elem.name}`} />)
    })

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    // Запрос на получение объектов
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getObjects());
    // }, [])
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Выберите объект:</Text>
           <View style={styles.select_container}>
            <SelectPicker
                    ref={pickerRef}
                    selectedValue={selectObject}
                    style={styles.select}
                    dropdownIcon={false}
                    onValueChange={(itemValue, itemIndex) =>{
                        console.log(itemValue);
                        setSelectObjectOnComponent(itemValue);
                        let index = itemValue.indexOf("-");
                        let code = itemValue.slice(0,index-1);
                        dispatch(setSelectObject(code))
                        
                    }
                    }>
                    {arrayObjectsElements}
                </SelectPicker>
           </View> 
           
            <Text style={styles.title}>Выберите тип прохода:</Text>
            <View style={styles.btn_container}>
                <TouchableOpacity onPress={()=>{
                    dispatch(setType("entry"))
                    }
                }>
                    <Text style={type === "entry" ? styles.select_button: styles.button}>Вход на объект</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    dispatch(setType("exit"))
                    }
                } >
                    <Text style={type === "exit" ? styles.select_button: styles.button}>Выход с объекта</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate("QRScreen");
                dispatch(setTimer(0));
             }}>
                    <Text style={styles.button}>Принять</Text>
                </TouchableOpacity>
        </View>
    )
}

export default SelectObjectScreen;
