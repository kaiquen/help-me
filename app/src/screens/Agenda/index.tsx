import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Arrow from '../../components/Arrow';
import { stylesGlobal } from '../../global/styles';

LocaleConfig . locales [ 'pt' ]  =  { 
    monthNames : [ 
      'Janeiro' , 
      'Fevereiro' , 
      'Março' , 
      'Abril' , 
      'Maio' , 
      'Junho' , 
      'Julho' , 
      'Agosto' , 
      'Setembro' , 
      'Outubro' , 
      'Novembro' , 
      'Dezembro' 
    ] , 
    monthNamesShort : ['Jan.', 'fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'] , 
    dayNames : ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'] , 
    dayNamesShort : ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'] , 
    hoje : "Hoje" 
  } ; 

  LocaleConfig . defaultLocale  =  'pt' ; 
export default () => {
    return (
        <View style={styles.container}>
            <Calendar
                renderArrow={direction => <Arrow direction={direction}/>}
                theme={{
                    textSectionTitleColor: stylesGlobal.colors.primary.orange,
                    todayTextColor: stylesGlobal.colors.primary.orange,
                    
                }}
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})