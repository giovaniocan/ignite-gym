import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type formDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export function SignUp(){
    const {control, handleSubmit} = useForm<formDataProps>() // typing and create hook-form

    function handleSubmiteForm(data: formDataProps){
        console.log(data)
    
    }

    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
            <VStack flex={1}  px={10} >
                <Image
                    source={BackgroundImg} 
                    defaultSource={BackgroundImg} // it's just to load this image first, good practices
                    alt="People working out"
                    resizeMode="contain"
                    position={"absolute"}
                    opacity={85}
                />

                <Center my={"24"}>
                    <LogoSvg />
                    <Text color="gray.100">
                        Build your mind and your body
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb="6" fontFamily="heading">
                       Creat your account
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({field: {onChange, value}}) => (
                            <Input
                                placeholder="Name"
                                autoCorrect={false}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    /> 

                    <Controller
                        control={control}
                        name="email"
                        render={({field: {onChange, value}}) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={onChange}
                                value={value}
                                
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({field: {onChange, value}}) => (
                            <Input
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password_confirmation"                       
                        render={({field: {onChange, value}}) => (
                            <Input
                                placeholder="Confirm Password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSubmiteForm)} // para quando a pessoa apertar enter no teclado ele der o submite tambem
                                returnKeyType="send" // to transformar o enter em send in the input( keyboard)
                            />
                        )}
                    />

                

                    <Button 
                        variant={"solid"} 
                        title="Create and access"
                        onPress={handleSubmit(handleSubmiteForm)} 
                    />
                </Center>

                
                <Button
                    title="Go back to Login"
                    variant={"outline"} 
                    mt={24}
                    onPress={handleGoBack}
                />
                

            
                

            </VStack>
        </ScrollView>
    )
}