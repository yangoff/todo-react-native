import React, {useState,useEffect} from 'react';
import { View,Text,TouchableOpacity,ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import * as Network from 'expo-network';

//COMPONENTS
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

//API
import  api  from "../../services/api";

export default function Home({navigation}){
    const [filter,setFilter] = useState('today');
    const [tasks,setTasks] = useState([]);
    const [load,setLoad] = useState(false);
    const [lateCount,setLateCount] = useState();
    const [macaddress,setMacaddress] = useState();

    async function getMac() {
        await Network.getMacAddressAsync()
        .then(mac => {setMacaddress(mac)});
    }

    async function loadTasks() {
        getMac().then(() =>{
            setLoad(true)
            //Not Await test
            api.get(`/task/filter/${filter}/${macaddress}`)
            .then(response=>{
                setTasks(response.data)
                setLoad(false);
            })
            .catch();
        });
        
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/${macaddress}`)
        .then(response=>{
            setLateCount(response.data.length)
        })
        .catch();
    }

    function Notification() {
        setFilter('late');
 }
    function New(){
        navigation.navigate('Task');
    }

    function Show(id) {
        navigation.navigate('Task', {idTask:id});
    }

    useEffect(()=>{
        loadTasks();
        lateVerify();   
    },[filter,macaddress]);

    return(

        <View style={styles.container}>
            <Header showNotification={lateCount > 0 ? true : false} showBack={false} pressNotification={Notification} late={lateCount} navigation={navigation}/>


                <View style={styles.filter}>
                    <TouchableOpacity onPress={() => setFilter('all')}>
                        <Text style={filter === 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setFilter('today')}>
                        <Text style={filter === 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setFilter('week')}>
                        <Text style={filter === 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setFilter('month')}>
                        <Text style={filter === 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setFilter('year')}>
                        <Text style={filter === 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>TAREFAS{ filter === 'late' && ' ATRASADAS'}</Text>
                </View>

                

                <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
                
                
                    {    
                        load ?
                        <ActivityIndicator color={'#EE6b26'} size={50}/>
                        :
                        tasks.map(t => (
                        <TaskCard key={t._id} done={t.done} type={t.type} title={t.title} when={t.when} onPress={() => Show(t._id)}/>
                        ))
                    }
                </ScrollView>
                
                


            <Footer icon={'add'} onPress={New}/>
        </View>

        

    )

}