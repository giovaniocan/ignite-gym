import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'


import { History } from '@screens/History'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { Exercise } from '@screens/exercise'


import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'


type AppRoutes = {
    home: undefined
    history: undefined
    profile: undefined
    exercise: undefined

}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>()

export function AppRoutes(){
    const {sizes, colors} = useTheme()

    const iconsSize = sizes[6]


    return(
        <Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarActiveTintColor: colors.green[500],
                tabBarInactiveTintColor: colors.gray[200],    
                tabBarStyle:{
                    backgroundColor: colors.gray[600],
                    borderTopWidth: 0,
                    height: Platform.OS === 'android' ? 'auto' : 96,
                    paddingBottom: sizes[10],
                    paddingTop: sizes[6],
                    
                }
            }} /*the second style is to takes the name the page off */>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <HomeSvg fill={color} width={iconsSize} height={iconsSize} /> // for use is this way i had to installs react-svg and other one library
                    )
                
                }} 
            /> 
            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({color}) => (
                        <HistorySvg fill={color} width={iconsSize} height={iconsSize} /> 
                    )
                
                }} 
            />
            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color}) => (
                        <ProfileSvg fill={color} width={iconsSize} height={iconsSize} /> 
                    )
                
                }}  
            />
            <Screen
                name="exercise"
                component={Exercise}
                options={{tabBarButton: () => null}} // in this line we're talking to the bottomTab to not show this icon ( it'is hide), but at the same time this interface is available on routes
            />
        </Navigator>
    )
}