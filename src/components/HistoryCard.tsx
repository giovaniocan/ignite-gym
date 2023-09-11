import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard(){
    return(
        <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems="center" justifyContent="space-between">
            <VStack flex={1} mr={5}>
                <Heading color="white" size="md" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
                    Back
                </Heading>

                <Text color="gray.100" fontSize="lg" numberOfLines={1}>
                    Levantamento Terra
                </Text>
            </VStack>
            <Text color="gray.300" fontSize="md">
                 08:56
            </Text>
        </HStack>
    )
}