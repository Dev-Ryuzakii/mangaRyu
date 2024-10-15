import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={{ 
        borderRadius: 15, 
        marginTop: 20,  // Add top margin
        marginBottom: 20, // Add bottom margin
      }}
    >
      <LinearGradient
        colors={["#42423F", "#42423F"]} // Set solid background color
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[{
          minHeight: 62,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          opacity: isLoading ? 0.5 : 1, // Apply opacity for loading state
        }, containerStyles]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600", ...textStyles }}>
            {title}
          </Text>

          {isLoading && (
            <ActivityIndicator
              animating={isLoading}
              color="#fff"
              size="small"
              style={{ marginLeft: 10 }}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
