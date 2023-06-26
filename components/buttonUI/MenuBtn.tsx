import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import styles from '../styles/StylesComponent';



type Props = {
    
    iconName:any;
    
};
export const MenuBtn = (props: Props) => {
    return (
            <TouchableOpacity style={styles.MenuBtn}>
                <Ionicons
                 name={props.iconName}
                 color={styles.buttonText.color} 
                 size={34} 
                 style={styles.MenuBtn}/>
                
            </TouchableOpacity>
       
    );
};