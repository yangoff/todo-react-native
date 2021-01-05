import React, {useState} from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import styles from './styles';

import iconDefault from '../../assets/default.png';

export default function TaskCard() {
   return(
        <TouchableOpacity style={styles.Card}>
            <View style={styles.cardLeft}>
                <Image style={iconDefault} style={style.typeActive}/>
                <Text style={style.cardTitle}>Fazer Relatório</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={style.cardDate}>05/01/2021</Text>
                <Text style={style.cardTime}>13:51</Text>
            </View>
        </TouchableOpacity>
   ) 
}