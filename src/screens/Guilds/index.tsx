import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild } from '../../components/Guild';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { GuildProps } from '../../components/Guild';

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect}: Props){
    const guilds = [
    {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Galera do Fifa',
        icon: 'image.png',
        owner: true
    },
    {
        id: '3',
        name: 'Counter-Strike',
        icon: 'image.png',
        owner: true
    }
];

return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Guild 
                data={item} 
                onPress={()=> handleGuildSelect(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.guilds}
            />
    </View>
)
}
