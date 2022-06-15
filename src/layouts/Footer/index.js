import React from 'react';
import {
    View,
    Text,
    HStack,
    Icon
} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default Footer = () => {
    return (
        <HStack justifyContent={'space-around'} safeAreaBottom>
            <View>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Tab 1</Text>
            </View>
            <View>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Tab 2</Text>
            </View>
            <View>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Tab 3</Text>
            </View>
            <View>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Tab 4</Text>
            </View>
        </HStack>
    )
}