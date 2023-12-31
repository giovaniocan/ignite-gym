import { ScrollView, HStack, Heading, Icon, Text, VStack, Image, Box } from "native-base";
import { TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";

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
                        <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1}  /*esse ultimo faz o texto quebrar sem mexer no proximo component, muito daora mesmo */> 
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
            <ScrollView>
                <VStack p={8}>
                    <Image
                        w="full"
                        h={80}
                        source={{uri: 'https://i.ytimg.com/vi/JE3XUqMyHXo/sddefault.jpg'}}
                        alt="Exercise name"
                        mb={3}
                        resizeMode="cover"
                        rounded="lg"
                    />

                    <Box bg="gray.600" rounded="md" px={4} pb={4}> 
                        <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                            <HStack>
                                <SeriesSvg />
                                <Text color="gray.200" ml={2}>
                                    3 series
                                </Text>
                            </HStack>

                            <HStack>
                                <RepetitionsSvg />
                                <Text color="gray.200" ml={2}>
                                    12 repeticoes
                                </Text>
                            </HStack>
                        </HStack>

                        <Button 
                            title="Mark as done"
                            variant="solid"
                        />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}