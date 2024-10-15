import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/sign"); // Adjust the route as needed
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 relative">
      <StatusBar backgroundColor="#161622" style="light" />
      
      {/* Background Image */}
      <Image
        source={require('../assets/images/main.png')} // Adjust to your image path
        className="absolute w-full h-full"
        style={{ resizeMode: 'cover' }}
      />

      {/* Overlay with opacity */}
      <View className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] opacity-90" />

      {/* Centered Text */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-[64px] text-center font-[Italianno] text-black">
          Your Centered Text
        </Text>
      </View>
    </View>
  );
}
