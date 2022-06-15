import React from 'react';
import {
    HStack,
    Text,
    VStack,
    Icon
} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default Footer = () => {
    return (
        <VStack safeAreaY pl={3}>
            <HStack mb={3}>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Item 1</Text>
            </HStack>
            <HStack mb={3}>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Item 2</Text>
            </HStack>
            <HStack mb={3}>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Item 3</Text>
            </HStack>
            <HStack mb={3}>
                <Icon as={MaterialIcons} name={'android'}/>
                <Text>Item 4</Text>
            </HStack>
        </VStack>
    )
}