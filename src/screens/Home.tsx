
import { useState } from 'react';

import { FlatList, HStack, Heading, Text, VStack, Icon } from 'native-base';


import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groups, setGroups] = useState(['back', 'bicips', 'tricipes', 'shoulder'])

  const [groupSelected, setGroupSelected] = useState('costa')

  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Cavalinho', 'Levantamento Terra'])

  return (
    <VStack flex={1}>
        <HomeHeader />

        <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Group 
                    name={item}
                    isActive={groupSelected === item}
                    onPress={() => setGroupSelected(item)}
                />
            )}

            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{px: 8, }}
            my={10}
            maxH={10}
        />

        <VStack flex={1} px={8} mb={5}>
            <HStack justifyContent="space-between">
                <Heading 
                    color="gray.200"
                    fontSize="md"
                >
                    Exercise
                </Heading>

                <Text
                    color="gray.200"
                    fontSize="sm"
                >
                    {exercises.length}
                </Text>
            </HStack>
            
            <FlatList
                data={exercises}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    return (
                        <ExerciseCard />
                    )
                
                }}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{paddingBottom: 20, }}
            />

        </VStack>
    </VStack>
  )
}