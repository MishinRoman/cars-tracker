import {View,Text,Button} from 'react-native';
import * as React from 'react';
import styles from './styles/StylesComponent';
import { MenuBtn } from './buttonUI/MenuBtn';




type Props = {
    
};
export const ButtomMenu = (props: Props) => {
    return (
        <View style={[styles.MenuBtn,{flex:0,width:"95%", flexWrap:"nowrap",borderRadius:6, flexDirection:"row", justifyContent:"space-around"}]}>
            <MenuBtn iconName={'menu'}/>
            <MenuBtn iconName={'add'}/>
            <MenuBtn iconName={'filter'}/>
            <MenuBtn iconName={'settings'}/>

        </View>
    );
};