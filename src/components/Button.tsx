import {Button as NativeButton, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
    title: string
}

export function Button({title, ...rest}:Props){
    return(
        <NativeButton
            bg="green.700"
            w="full"
            h={14}
            rounded="sm"
            _pressed={{
                bg: "green.500",
            }}

            {...rest}
        
        >
            <Text 
                color="white"
                fontSize="sm"
                fontFamily="heading"
            >
                {title}
            
            </Text>
        </NativeButton>
    )
}