import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

const signUPSchema = yup.object({
    name: yup.string().required('Inform your name'),
    email: yup.string().required('Inform your email').email('Invalid email'),
    password: yup.string().required('Inform your password').min(6, 'Password must be at least 6 characters'),
    password_confirmation: yup.string().required('Confirm your password').oneOf([yup.ref('password')], 'Both passwords has to be equals') // this last confirmation is comparing both passwords
})

export function SignUp(){
    const {control, handleSubmit, formState:{errors}} = useForm<formDataProps>({
        resolver: yupResolver(signUPSchema)
    
    }) // typing and create hook-form

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
                                errorMessage={errors.name?.message}
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
                                errorMessage={errors.email?.message}
                                
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
                                errorMessage={errors.password?.message}
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
                                errorMessage={errors.password_confirmation?.message}
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
                    mt={12}
                    onPress={handleGoBack}
                />
                

            
                

            </VStack>
        </ScrollView>
    )
}