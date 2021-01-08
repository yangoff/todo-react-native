import React, {useState} from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';

//ICONS
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({done,title,when,type}) {
   return(
        <TouchableOpacity style={[styles.card, done && styles.cardDone ]}>
            <View style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActive} />
                <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode={'tail'}>{title.length > 21 ? title.substring(0,19)+'...' : title}</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>
   ) 
}

