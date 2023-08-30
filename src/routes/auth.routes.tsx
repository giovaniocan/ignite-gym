import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";


type AuthRoutes = {
    signIn: undefined
    signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

// on this file we created a specific type for those routes, because they will be public


const { Navigator, Screen} = createNativeStackNavigator<AuthRoutes>()


export function Authroutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}/* to hide the name of the routhe and fix the screen */>
            <Screen
                name="signIn"
                component={SignIn}
            />

            <Screen
                name="signUp"
                component={SignUp}
            />
        </Navigator>
    )
}