import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';


export function Profile () {
    const {user} = useAuth();
    console.log(user);
    return(
       <View style={styles.container}>

           <Avatar urlImage={user.avatar}/>

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


