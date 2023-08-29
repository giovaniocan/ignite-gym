import { Center, Image, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg'



import BackgroundImg from '@assets/background.png'

export function SignIn(){
    return(
        <VStack flex={1} bg="gray.700" >
            <Image
                source={BackgroundImg} 
                alt="People working out"
                resizeMode="contain"
                position={"absolute"}
            />

            <Center my={"24"}>
                <LogoSvg />
                <Text color="gray.100">
                    Build your mind and your body
                </Text>
            </Center>

            

        </VStack>
    )
}