import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert,TextInput } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import CountryPicker from "react-native-country-picker-modal";
import { icons } from "../constants";



const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [callingCode, setCallingCode] = useState('');

  const handlePhoneChange = (number) => {
    setPhoneNumber(number);
    const isValid = phoneRef.isValidNumber(number); // Validate number
    setValidPhone(isValid);
  };

  let phoneRef = null;

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Label */}
      <Text className="text-black font-semibold">{title}</Text>

      {/* Input Field */}
      {title === "Phone Number" ? (
  <View className="flex flex-row items-center space-x-2 w-full border-b-2 border-black-200" style={{ backgroundColor: 'transparent' }}>
    {/* Country Picker */}
    {/* <CountryPicker
      countryCode={countryCode}
      withCallingCode
      withFlag
      onSelect={(country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
      }}
      containerButtonStyle={{ backgroundColor: 'transparent' }}  // Ensure the CountryPicker is transparent
    /> */}

    {/* Phone Number Input */}
    <PhoneInput
  ref={(ref) => (phoneRef = ref)}
  defaultCode={countryCode}
  value={phoneNumber}
  onChangeFormattedText={handlePhoneChange}
  textProps={{
    placeholder: 'Enter phone number',
    placeholderTextColor: "#7B7B8B",
  }}
  textStyle={{ color: 'black', backgroundColor: 'transparent' }}  // Text background transparent
  style={{ flex: 1, backgroundColor: 'transparent' }}  // Input field background transparent
  countryPickerButtonStyle={{
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    paddingHorizontal: 10,     // Adjust padding if necessary
  }}
  textContainerStyle={{
    backgroundColor: 'transparent',  // Text container background transparent
  }}
/>

  </View>
) : (
  <View className="w-full border-b-2 border-black-200 flex flex-row items-center" style={{ backgroundColor: 'transparent' }}>
    {/* Text Input */}
    <TextInput
      className="flex-1 text-black font-psemibold text-base"
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#7B7B8B"
      onChangeText={handleChangeText}
      secureTextEntry={title === "Password" && !showPassword}
      style={{ backgroundColor: 'transparent' }}  // Ensure TextInput background is transparent
      {...props}
    />
    
    {/* Toggle Password Visibility */}
    {title === "Password" && (
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image
          source={!showPassword ? icons.eye : icons.eyeHide}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
    )}
  </View>
)}

    </View>
  );
};

export default FormField;
