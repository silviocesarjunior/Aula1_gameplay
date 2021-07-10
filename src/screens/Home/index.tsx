import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';

import { ListDivider } from '../../components/ListDivider';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';


import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home () {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
    {
        id: '1',
        guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '06/07 às 21:10h',
        description: 'É hoje que irei mitar'   
    },
    {
        id: '2',
        guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '06/07 às 21:10h',
        description: 'É hoje que irei mitar'   
    },
    ] 

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }
    return(
        <Background>
           <View style={styles.header}>
           <Profile />
           <ButtonAdd onPress={handleAppointmentCreate}/>
           </View>
           
               <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
               />
               <View style={styles.content}>
                   <ListHeader
                   title="Partidas agendadas"
                   subtitle="Total 6"
                   />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment 
                        data={item} 
                        onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={()=> <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
                   
               </View>
           
        </Background>
    );    
}