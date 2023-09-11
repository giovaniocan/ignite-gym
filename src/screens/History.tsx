import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History(){
    const [exercises, setExercises] = useState([
        {
            title: '05.09.2023',
            data:['Puxada frontal', 'Remada unilateral']
        },
        {
            title: '06.09.2023',
            data:['Puxada frontal']
        },
    ])

    return(
        <VStack flex={1}>
            <ScreenHeader title="Exercise history" />

            <SectionList 
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    return (
                        <HistoryCard />
                    )
                }}
                renderSectionHeader={({section}) => (
                    <Heading
                        color="gray.200"
                        fontSize="md"
                        fontFamily="heading"
                        mt={10}
                        mb={3}
                    >
                        {section.title}
                    </Heading>
                )}
                px={8}

                contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent:'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        There is still no record of exercises. {'\n'}
                        Let's workout today?
                    </Text>
                )}

                showsVerticalScrollIndicator={false}
            />

           
        </VStack>
    )
}