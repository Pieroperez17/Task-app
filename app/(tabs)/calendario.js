import { Pressable, ScrollView, Text,View } from "react-native";
import {Link} from 'expo-router';   
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
import {styled} from 'nativewind';

const StyledPressable = styled(Pressable)

export default function CalendarioView() {
    return (
        <Screen>
            <ScrollView>
                <View className="items-center justify-between">
                    <Text className="text-white font-bold mb-2 text-3xl text-center">
                        Actividades
                    </Text>
                </View>

                

                <Text className="text-white text-white/90 mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea
                </Text>

            </ScrollView>
        </Screen>
    );
}