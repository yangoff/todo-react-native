import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'column',
    },
    header:{
        width:'100%',
        height: 90,
        backgroundColor: '#20295F',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ee6b26',
        borderBottomWidth:5,
    },
    headerText:{
        color: '#fff',
        fontWeight:'bold',
        
    },
    containerButtons:{
        width:'100%',
        justifyContent: 'center',
        flexDirection:'row',
        position: 'absolute',
        bottom: 70    },
    buttonBack:{
        backgroundColor:'#ee6b26',
        width:'45%',
        padding:10,
        alignItems:'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10


    },
    buttonScanActive:{
        backgroundColor:'green',
        width:'45%',
        padding:10,
        alignItems:'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius:10,
        
    },
    buttonScanInactive:{
        backgroundColor:'#20295F',
        width:'45%',
        padding:10,
        alignItems:'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius:10,
        
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        fontSize: 12
    }

});


export default styles;