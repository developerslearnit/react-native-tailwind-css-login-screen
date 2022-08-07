import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const App: React.FC = () => {
  return (
    <>
      <TailwindProvider>
        {/* TailwindProvider */}
        <StatusBar style="light" />
        <Login />
      </TailwindProvider>
    </>
  );
};

export default App;
