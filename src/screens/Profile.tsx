import { useState } from "react";

import { Center, ScrollView, Skeleton, VStack } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

const PHOTO_SIZE = 33;

export function Profile(){
    const [photoisLoading, setPhotoisLoading] = useState(false);

    return(
        <VStack flex={1}>
            <ScreenHeader title="Profile" />

            <ScrollView>
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
                </Center>
                
            </ScrollView>

        </VStack>
    )
}