import { NavigationContainer } from "@react-navigation/native";
import { Authroutes } from "./auth.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <Authroutes />
        </NavigationContainer>
    )
}