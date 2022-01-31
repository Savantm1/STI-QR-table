import { StyleSheet } from "react-native";

const  styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: "100%",
        borderWidth:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "flex-start",
        paddingTop: 50
    },
    title: {
        
        fontSize: 80,
        color:"black",
        textAlign:"center"
    },
    subtitle: {
        fontSize: 40,
        textAlign:"center"
    },
    timer_container:{
        backgroundColor:"#28a745",
        fontSize:40,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
        borderRadius: 40,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
        marginBottom:20
    },
    counter: {
        fontSize: 60,
        color:'white',
    },
    qr_container: {
        marginTop:20,
        width:"50%",
        height: "50%",
        alignItems:"center"
        // backgroundColor:"yellow"
    }
})

export default styles;