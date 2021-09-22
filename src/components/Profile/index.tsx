import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';


export function Profile () {
    const {user, singOut} = useAuth();
    console.log(user);

    function handleSignOut(){
        Alert.alert('Logout','Deseja sair do gameplay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => singOut()
            }
        ])
    } 

    return(
       <View style={styles.container}>
           
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
           <View>
               <View style={styles.user}> 
                   <Text style={styles.greeting}>
                       Hello,
                   </Text>

                   <Text style={styles.username}>
                       {user.firstName}
                   </Text>
               </View>

               <Text style={styles.message}>
                   Bora agendar uma partida!
               </Text>
           </View>
           
       </View>
    

    )
}


