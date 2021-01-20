import React, {useState,useEffect, useMemo} from 'react';
import { View,Text,ScrollView, Image,TextInput,KeyboardAvoidingView,TouchableOpacity,Switch, Alert, ActivityIndicator } from 'react-native';
import * as Network from 'expo-network';

//Styles
import styles from './styles';

//COMPONENTS
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import DateTimePickerOS from "../../components/DateTimeInput/index.android";

//ICONS
import typeIcons from '../../utils/typeIcons';

//API
import  api  from "../../services/api";

export default function Task({navigation, idTask}){
    const [id,setId] = useState();
    const [done,setDone] = useState(false);
    const [type,setType] = useState();
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [hour,setHour] = useState();
    const [macaddress,setMacaddress] = useState();
    const [load,setLoad] = useState(true);


    useEffect(()=>{
        if(navigation.state.params){
            setId(navigation.state.params.idTask);
            loadTasks().then(()=>{
                setLoad(false);
            });
        }
        getMac();
    },[id]);

    async function New() {
        
        if(!title)
        return Alert.alert('Defina o Titulo!');
        if(!description)
        return Alert.alert('Defina uma Descrição!');
        if(!type)
        return Alert.alert('Defina o Icone!');
        if(!date)
        return Alert.alert('Defina a data!');
        if(!hour)
        return Alert.alert('Defina a hora!');

        await api.post('/task',{
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}.000`
        }).then(() => {
            Alert.alert('Tarefa Cadastrada com sucesso');
            navigation.navigate('Home');
        });

    }
    function getMac() {
        Network.getMacAddressAsync()
        .then(mac => {
            setMacaddress(mac);
            setLoad(false);
        });
    }

    async function loadTasks(){
        await api.get(`task/${id}`)
        .then(response =>{
                setLoad(true);
                setDone(response.data.done);
                setType(response.data.type);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDate(response.data.when);
                setHour(response.data.when);
        });
    }

    

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation}/>
                {
                    load ?
                <ActivityIndicator color='#EE6B26' size={50} />
                    :
                <ScrollView style={{width:'100%'}}>
                    
                    <ScrollView horizontal={true} style={{marginVertical:10}} showsHorizontalScrollIndicator={false}>

                        {
                            typeIcons.map((icon, index) =>(
                                icon != null &&
                        <TouchableOpacity key={index}  onPress={()=> setType(index)}>
                            <Image  source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                        </TouchableOpacity>
                        ))
                        }

                    </ScrollView>
                    
                    <Text style={styles.label}>Titulo</Text>
                    <TextInput style={styles.input} maxLength={30} placeholder="Titulo do lembrete" onChangeText={(text) => setTitle(text)} value={title}></TextInput>

                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput style={styles.inputArea} multiline={true} maxLength={200} placeholder="Detalhes do lembrete" onChangeText={(text) => setDescription(text)} value={description}></TextInput>
                    
                    <DateTimePickerOS type={'date'} save={setDate}/>
                    <DateTimePickerOS type={'time'} save={setHour}/>

                    {   id &&
                        <View style={styles.inLine}>
                        <View style={styles.inputInLine}>
                            <Switch onValueChange={()=> setDone(!done)} value={done} thumbColor={done ? '#00761b':'#ee6b26'}/>
                            <Text style={styles.switchLabel}>Concluído</Text>
                        </View>
                            <TouchableOpacity>
                                <Text style={styles.removeLabel}>EXCLUIR</Text>
                            </TouchableOpacity>
                        </View> 
                     }      
                </ScrollView>
                }

                <Footer icon={'save'} onPress={New}/>
        </KeyboardAvoidingView>
        
        
    )

}