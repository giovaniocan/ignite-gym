import { Center, Heading, Image, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg'



import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn(){
    return(
        <VStack flex={1} bg="gray.700" px={10} >
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

                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
               />

                <Input
                    placeholder="Password"
                    secureTextEntry
                 />

                <Button variant={"solid"} title="Sign In" />
            </Center>

            <Button title="Create account" variant={"outline"} />
           

           
            

        </VStack>
    )
}