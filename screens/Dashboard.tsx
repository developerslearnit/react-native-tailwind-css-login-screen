import { View, Text, Dimensions } from "react-native";
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import DashboardCard from "../components/Cards/DashboardCard";
import { ArrowNarrowLeftIcon,UserIcon,ChartBarIcon,ChartPieIcon,} from "react-native-heroicons/solid";

const Dashboard = () => {
  const [user, setUser] = React.useState<string | null>("Mark");
  return (
    <MainContainer>
      <View className="h-[55px] z-20 mt-8 flex flex-row justify-between items-center px-2">
        <View className="flex flex-row gap-4 justify-center items-center">
          <ArrowNarrowLeftIcon color="white" />
          <Text className="text-white text-xl">Dashboard</Text>
        </View>
        <View className="w-[40px] h-[40px] bg-[#704341] justify-center items-center rounded-full">
          <UserIcon color="white" />
        </View>
      </View>
      <View className="w-full bg-[#0C080C] h-[30%] rounded-[20px] absolute" />
      <Text className="text-white mt-[20px] mb-[20px] text-2xl text-bold ml-[20px]">
        Hello, {user}
      </Text>
      <DashboardCard
        cardTitle="Balance"
        totalAmount={"$57,000.00"}
        dateText="07-08-2022"
        icon={<ChartBarIcon color="#008D96" size={60} />}
      />

      <DashboardCard
        cardTitle="Total Savings"
        totalAmount={"$20,050.02"}
        dateText="07-08-2022"
        icon={<ChartPieIcon color="#008D96" size={60} />}
      />
    </MainContainer>
  );
};

export default Dashboard;
