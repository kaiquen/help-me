import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { stylesGlobal } from '../../global/styles';

export default ({direction}:any ) => {
    return  direction==="left" ? <Icon name="chevron-left" size={25} color={stylesGlobal.colors.primary.orange}/>:<Icon name="chevron-right" size={25} color={stylesGlobal.colors.primary.orange}/>
}
