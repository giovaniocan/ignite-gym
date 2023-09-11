import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from "react-hook-form";

type formDataProps = {
    email: string;
    password: string;
}

const signInSchema = yup.object({
    email: yup.string().required('Inform your email').email('Invalid email'),
    password: yup.string().required('Inform your password').min(6, 'Password must be at least 6 characters'),
})


export function SignIn(){
    const {control, handleSubmit, formState:{errors}} = useForm<formDataProps>({
        resolver: yupResolver(signInSchema)
    
    }) // typing and create hook-form

    function handleSubmiteForm(data: formDataProps){
        console.log(data)
    
    }

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
            <VStack flex={1}  px={10} >
                <Image
                    source={BackgroundImg} 
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
                        Access your account
                    </Heading>

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
                                onSubmitEditing={handleSubmit(handleSubmiteForm)} // para quando a pessoa apertar enter no teclado ele der o submite tambem
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />


                    <Button variant={"solid"} title="Sign In" onPress={handleSubmit(handleSubmiteForm)} />
                </Center>

                <Center mt={24}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Don't you have an account?
                    </Text>

                    <Button 
                        title="Create account" 
                        variant={"outline"}
                        onPress={handleNewAccount}
                     />
                </Center>

            
                

            </VStack>
        </ScrollView>
    )
}