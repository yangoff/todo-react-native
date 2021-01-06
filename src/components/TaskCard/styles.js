import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    card:{  
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        marginVertical: 10,
        height: 80,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#dbdbdb',
        borderRightWidth:4,
        borderBottomWidth:4
        
    },
    cardLeft:{
        flexDirection:'row',
        alignItems:'center'


    },
    typeActive:{
        height: 50,
        width:50
    },
    cardTitle:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:16
    },
    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    cardDate:{
        color:'#EE6b26',
        fontWeight:'bold',
        fontSize:16
    },
    cardTime:{
        color:'#e3e3e3',
        fontWeight:'bold'

    },
    cardDone:{
        opacity:0.5,
        backgroundColor:'#d9d9d9'
    }




});

export default styles;