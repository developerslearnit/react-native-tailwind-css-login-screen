import { View, Text,Pressable } from "react-native";
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import KeyboardAvoidWrapper from "../components/Container/KeyboardAvoidWrapper";
import CustomTextInput from "../components/InputText/CustomTextInput";
import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/Buttons/CustomButton";

const Register = () => {
  const [username, setUsername] = React.useState<String | null>(null);
  const [password, setPassword] = React.useState<String | null>(null);
  const onUsernameChange = (username: String) => {
    setUsername(username);
  };
  const onPasswordChange = (password: String) => {
    setPassword(password);
  };
  return (
    <MainContainer>
      <KeyboardAvoidWrapper>
        <View className="flex flex-row items-center justify-center gap-0 pt-[25%]">
          <Text className="text-3xl text-[#EFE3C8] font-mono">Secure</Text>
          <Text className="text-3xl text-[#EFE3C850] font-sans">App</Text>
        </View>
        <View className="flex flex-1 justify-center items-center pt-[7%] px-[25px]">
          <Text className="text-[#EFE3C8] text-md">
            Enter your account details to register
          </Text>
          <View className="h-[30px] w-full"></View>

          <CustomTextInput
            onChangeText={onUsernameChange}
            label="Full Name"
            placeholder="Enter your full name"
          />

          <CustomTextInput
            icon={<AtSymbolIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onUsernameChange}
            label="Email"
            keyboardType={"email-address"}
            placeholder="Enter your email"
          />
          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="Password"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />

          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="Confirm Password"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />
          <CustomButton
            buttonText="Register"
            buttonClassNames="w-full rounded-md p-3 bg-[#EFE3C8] flex justify-center items-center mt-5"
            textClassNames="text-[#4A2B29] text-[18px] font-semibold"
            onPress={() => console.log(password)}
          />

          <View className="flex w-full justify-end items-end pt-4">
            <Pressable onPress={() => {}}>
              <Text className="text-center text-gray-500 text-sm">
                Already have an account?
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidWrapper>
    </MainContainer>
  );
};

export default Register;
