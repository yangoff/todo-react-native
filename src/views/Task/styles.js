import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    imageIcon:{
        width:40,
        height:40,
        marginHorizontal:10,
    },
    label:{
       color:'#707070',
       fontSize:16,
       paddingHorizontal:10,
       marginTop:20,
       marginBottom:5 
    },
    input:{
      fontSize:16,
      padding:10,
      width:'95%',
      borderBottomWidth:1,
      borderBottomColor:'#ee6b26',
      marginHorizontal:10
    },
    inputArea:{
        fontSize:16,
        padding:10,
        width:'95%',
        borderWidth:1,
        borderColor:'#ee6b26',
        marginHorizontal:10,
        borderRadius:10,
        height:100,
        textAlignVertical:'top'
    },
    inputInLine:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    switchLabel:{
        fontWeight:'bold',
        fontSize:16,
        color:'#ee6b26',
        textTransform:'uppercase',
        paddingLeft:10
    },
    removeLabel:{
        fontWeight:'bold',
        fontSize:16,
        color:'#20295f',
        textTransform:'uppercase',
        
    },
    inLine:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    }
    

});


export default styles;