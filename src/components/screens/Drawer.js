import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Tela1" component={Tela1} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer