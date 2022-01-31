import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontSize:40,
        textAlign:"center",
        marginBottom:20,
        marginTop:20
    },
    btn_container:{
        display:"flex",
        flexDirection:"row"
    },
    button: {
        fontSize:30,
        borderWidth:3,
        borderColor:"#fd4f00",
        borderRadius:10,
        color:"#fd4f00",
        padding:10,
        margin: 10
    },

    select_button : {
        backgroundColor:"#fd4f00",
        borderColor:"#fd4f00",
        color:"white",
        padding:10,
        margin: 10,
        borderRadius:10,
        fontSize:30,
        borderWidth:3,
    },
    select_container: {
        borderWidth:3,
        borderColor:"#fd4f00",
        borderRadius:10,
    },
    select: {
        color:"#fd4f00",
        width:500,
    },
    item: {
        color: "#fd4f00",
        fontSize:25
    }
})

export default styles;