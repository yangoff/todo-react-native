import React, { useState,useEffect } from "react";
import { Button, View,Text, TouchableOpacity, TextInput, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {format} from 'date-fns';
import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

import styles from './styles'

export default function DateTimePickerOS({type,save}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dhSelected,setDHSelected] = useState();


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    saveData(date);
    hideDatePicker();
  };

  function saveData(date) {
      if(type === 'date'){
        setDHSelected(format(new Date(date),'dd-MM-yyyy'));
        save(format(new Date(date),'yyyy-MM-dd'));
      }else{
        setDHSelected(format(new Date(date), 'HH:mm'));
        save(format(new Date(date), 'HH:mm:ss'));
      }
  }






  return (
    <TouchableOpacity onPress={showDatePicker}>
        <TextInput 
        style={styles.input}
        placeholder={type === 'date' ? 'Defina a data' : 'Defina a hora'}
        editable={false}
        value={dhSelected}
        />
        <Image
        style={styles.iconTextInput}
        source={type ==='date' ? iconCalendar : iconClock}
        />
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={type}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale="pt_BR"
            isDarkModeEnabled={true}
        />
    </TouchableOpacity>
  );
};

