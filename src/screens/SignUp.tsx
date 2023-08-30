import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg'



import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp(){
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
                       Creat your account
                    </Heading>

                    <Input
                        placeholder="Name"
                        autoCorrect={false}
                    />

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

                    <Button variant={"solid"} title="Create and access" />
                </Center>

                
                    <Button
                        title="Go back to Login" variant={"outline"} 
                        mt={24}
                    />
                

            
                

            </VStack>
        </ScrollView>
    )
}