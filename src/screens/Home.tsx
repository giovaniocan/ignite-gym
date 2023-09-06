
import { useState } from 'react';

import { FlatList, HStack, Heading, Text, VStack, Icon } from 'native-base';


import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationRoutesProps } from '@routes/app.routes';

export function Home() {
  const [groups, setGroups] = useState(['back', 'bicips', 'tricipes', 'shoulder'])

  const [groupSelected, setGroupSelected] = useState('back')

  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Cavalinho', 'Levantamento Terra'])

  const navigation = useNavigation<AppNavigationRoutesProps>()

  function handleOpenExerciseDetail(){
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
        <HomeHeader />

        <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Group 
                    name={item}
                    isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()} // to check with no considering if it's in upper or lowercase, to prevent some errors
                    onPress={() => setGroupSelected(item)}
                />
            )}

            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{px: 8, }}
            my={10}
            maxH={10}
            minH={10}
        />

        <VStack flex={1} px={8} >
            <HStack justifyContent="space-between" mb={5}>
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
                        <ExerciseCard 
                            onPress={handleOpenExerciseDetail}
                        />
                    )
                
                }}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{paddingBottom: 20, }}
            />

        </VStack>
    </VStack>
  )
}