import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard(){
    return(
        <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems="center" justifyContent="space-between">
            <VStack>
                <Heading color="white" size="md" textTransform="capitalize">
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