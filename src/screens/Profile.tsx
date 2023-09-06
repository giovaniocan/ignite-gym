import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { FileInfo } from 'expo-file-system'

import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile(){
    const [photoisLoading, setPhotoisLoading] = useState(false);

    const [userPhoto, setUserPhoto] = useState('https://github.com/giovaniocan.png');

    const toast = useToast()

    async function handleUserSelectPhoto(){
        setPhotoisLoading(true)
        try {
            const photoSelected =  await ImagePicker.launchImageLibraryAsync({ // access user photo gallery
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // what kinda of media you want
                quality: 1, // to fefine the quality of the image it's from 0 to 1
                aspect: [4, 4], // 4 x 4
                allowsEditing: true, // to allow user to edit the image
            }) 
    
            if(photoSelected.canceled){
                return;
            }

            if(photoSelected.assets[0].uri){
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo // We'te getting the size of the image

                if(photoInfo?.size && (photoInfo.size / 1024 /1024) > 5){// we're cheking fi the image is bigger than 5 mb
                  return  toast.show({
                    title: 'This image is very big. Please select a smaller one',
                    placement: 'top',
                    bgColor: 'red.500'
                  })// if it's bigger than 5 mb we're showing an alert
                
                }

                setUserPhoto(photoSelected.assets[0].uri)
            }
        
        } catch (error) {
            console.log(error);
        }finally{
            setPhotoisLoading(false)
        }
    }

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
                            source={{uri: userPhoto }} 
                            alt="User Photo"
                            size={PHOTO_SIZE}
                        />
                    }

                    <TouchableOpacity onPress={handleUserSelectPhoto}>
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