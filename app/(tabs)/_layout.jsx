import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'

import { icons } from '../../constants' // Ensure this path is correct

const TabIcon = ({ icon, color, name, focused }) => {
  return (  // Add return here
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }} // Use 'style' instead of 'tintColor' directly
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#EF1C1C',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                name={""}
                color={color}
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="compass"
          options={{
            title: "Compass",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.compass}
                name={""}
                color={color}
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                name={""}
                color={color}
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="notification"
          options={{
            title: "Notification",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.notification}
                name={""}
                color={color}
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
