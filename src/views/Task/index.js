import React, {useState,useEffect} from 'react';
import { View,Text,ScrollView, Image,TextInput,KeyboardAvoidingView,TouchableOpacity,Switch } from 'react-native';
import styles from './styles';

//COMPONENTS
import Header from "../../components/Header";
import Footer from '../../components/Footer';
// import TaskCard from '../../components/TaskCard';
import DateTimePickerOS from "../../components/DateTimeInput/index.android";

//ICONS
import typeIcons from '../../utils/typeIcons';

//API
import  api  from "../../services/api";

export default function Task(){
    const [done,setDone] = useState(false)
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true}/>
                <ScrollView style={{width:'100%'}}>
                    
                    <ScrollView horizontal={true} style={{marginVertical:10}} showsHorizontalScrollIndicator={false}>

                        {
                            typeIcons.map(icon =>(
                                icon != null &&
                        <TouchableOpacity>
                            <Image source={icon} style={styles.imageIcon}/>
                        </TouchableOpacity>
                        ))
                        }

                    </ScrollView>
                    
                    <Text style={styles.label}>Titulo</Text>
                    <TextInput style={styles.input} maxLength={30} placeholder="Titulo do lembrete"></TextInput>

                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput style={styles.inputArea} multiline={true} maxLength={200} placeholder="Detalhes do lembrete"></TextInput>
                    <DateTimePickerOS type={'date'}/>
                    <DateTimePickerOS type={'time'}/>
                    <View style={styles.inLine}>
                        <View style={styles.inputInLine}>
                            <Switch onValueChange={()=> setDone(!done)} value={done} thumbColor={done ? '#00761b':'#ee6b26'}/>
                            <Text style={styles.switchLabel}>Concluído</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.removeLabel}>EXCLUIR</Text>
                        </TouchableOpacity>
                    </View>        
                </ScrollView>

                <Footer icon={'save'}/>
        </KeyboardAvoidingView>
        
        
    )

}