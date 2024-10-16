import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { useRouter } from 'expo-router'; 
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "../../lib/appwrite";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
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
          <Text className="text-black text-2xl font-bold">Login</Text>
          <Text className="text-red-500 text-sm font-semibold">
            Please sign in to continue
          </Text>

          {/* Email Form Field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* Password Form Field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          {/* Sign In Button */}
          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7 w-[80%] h-[60px]" // Adjusted button size
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-3 flex-row gap-2">
            <Text className="text-sm text-black font-regular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-sm font-semibold text-red-500"
            >
              Signup
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
