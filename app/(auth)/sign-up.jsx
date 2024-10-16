import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { useRouter } from 'expo-router'; 
import { Link } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      {/* Background Image */}
      <Image
        source={require("../../assets/images/background.png")}
        className="absolute w-full h-full"
        style={{ resizeMode: 'cover', position: 'absolute' }} // Background stretches across the screen
      />

      {/* Content */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="w-full flex justify-center h-full px-10 my-6 items-center">
          <Text className="text-black text-2xl font-bold">Sign Up</Text>
          <Text className="text-red-500 text-sm font-semibold">
            Create an account to continue
          </Text>

          {/* Name Form Field */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            placeholder="Enter your username"
          />

          {/* Email Form Field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          {/* Phone Number Form Field
          <FormField
            title="Phone Number"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
            otherStyles="mt-7"
            keyboardType="phone-pad"
            placeholder="Enter your phone number"
          /> */}

          {/* Password Form Field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter your password"
            secureTextEntry
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7 w-[80%] h-[60px]" // Adjusted button size
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-3 flex-row gap-2">
            <Text className="text-sm text-black font-regular">
              Already have an account?
            </Text>
            <Link
              href="/sign"
              className="text-sm font-semibold text-red-500"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
