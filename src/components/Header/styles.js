import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: 90,
        backgroundColor: '#20295F',
        borderBottomWidth:5,
        borderBottomColor:'#ee6b26',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:120,
        height:50
    },
    notification:{
        position:'absolute',
        right:20,

    },
    notificationImage:{
        width:30,
        height:35
    },
    circle:{
        height:25,
        width:25,
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:13,
        bottom:13,


    },
    leftIcon:{
        position:'absolute',
        left:20
    },
    leftIconImage:{
        width:30,
        height:30
    },
    notificationText:{
        fontWeight:'bold',
        color:'#ee6b26'
    }


});

export default styles;