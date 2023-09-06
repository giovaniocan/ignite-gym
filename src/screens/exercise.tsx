import { Center, HStack, Heading, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg'

export function Exercise(){

    const navigation = useNavigation<AppNavigationRoutesProps>()

    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon 
                        as={Feather}
                        name="arrow-left"
                        size={6}
                        color="green.500"
                    
                    />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1} /*esse ultimo faz o texto quebrar sem mexer no proximo component, muito daora mesmo */> 
                        Exercise
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize" >
                            Back
                        </Text>
                    
                    </HStack>
            </HStack>
            </VStack>

            
        </VStack>
    )
}