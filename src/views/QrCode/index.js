import React, {useEffect,useState} from 'react';
import {Text,View,TouchableOpacity,Alert} from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';
import * as NetWork from 'expo-network';

import styles from './styles';
import {StyleSheet} from 'react-native';



export default function QrCode({navigation}){
    const [hasPermission,setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(false);

    async function getMacAddress(){
        await NetWork.getMacAddressAsync().then(mac=>{
            Alert.alert(`Seu mac é: ${mac}`);
        });
    }

    useEffect(() => {
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[])

    const handledBarCodeScanned = ({data}) => {
        setScanned(true);
        if(data == 'getmacaddress'){
            getMacAddress();
        }else{
            Alert.alert('QrCode Inválido');
        }
    }

    return(
        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handledBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
        
            <View style={styles.header}>
                <Text style={styles.headerText}> Conectar com minha conta web </Text>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonBack} onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.textButton}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ scanned ? styles.buttonScanActive : styles.buttonScanInactive } onPress={()=> setScanned(false)}>
                    <Text style={styles.textButton}>SCAN NOVAMENTE</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}