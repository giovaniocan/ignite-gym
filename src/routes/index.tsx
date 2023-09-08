import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Authroutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Box, useTheme } from "native-base";

export function Routes(){
    const {colors} = useTheme()

    const theme = DefaultTheme
    theme.colors.background = colors.gray[700]

    /*i used this box, because when we change the screen, to take precaution of the white screen between the screens*/
    return(
        <Box flex={1} bg="gray.700" > 
            <NavigationContainer theme={theme}>
                <Authroutes />
            </NavigationContainer>
        </Box>
    )
}