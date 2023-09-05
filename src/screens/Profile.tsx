import { useState } from "react";

import { Center, Heading, ScrollView, Skeleton, Text, VStack } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile(){
    const [photoisLoading, setPhotoisLoading] = useState(false);

    return(
        <VStack flex={1}>
            <ScreenHeader title="Profile" />

            <ScrollView contentContainerStyle={{paddingBottom:36}}>
                <Center mt={6} px={10}>
                    {
                        photoisLoading 
                        ?
                        <Skeleton 
                            w={PHOTO_SIZE}
                            h={PHOTO_SIZE}
                            rounded="full"
                            startColor="gray.500"
                            endColor="gray.400"
                        />
                        :
                        <UserPhoto 
                            source={{uri: 'https://github.com/giovaniocan.png'}} 
                            alt="User Photo"
                            size={PHOTO_SIZE}
                        />
                    }

                    <TouchableOpacity>
                        <Text color="green.700" fontWeight="bold" fontSize="md" mt={2} mb={8} >
                            Change Photo
                        </Text>
                    </TouchableOpacity>

                    <Input 
                        bg="gray.600"
                        placeholder="Name"
                    />

                    <Input 
                        bg="gray.600"
                        value="giovaniocan@gmail.com"
                        isDisabled
                        
                    />
              

                    <Heading color="gray.200" fontSize="md" alignSelf="flex-start" mb={2} mt={12}> 
                        Change Password
                    </Heading>

                    <Input 
                        bg="gray.600"
                        placeholder="Old password"
                        secureTextEntry
                    />

                    <Input 
                        bg="gray.600"
                        placeholder="New password"
                        secureTextEntry
                    />

                    <Input 
                        bg="gray.600"
                        placeholder="Confirm new password"
                        secureTextEntry
                    />

                    <Button
                        title="Update"
                        variant="solid"
                        mt={4}
                    />
             </Center>
                
            </ScrollView>

            

        </VStack>
    )
}