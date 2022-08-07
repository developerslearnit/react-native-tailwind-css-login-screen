import { SafeAreaView } from "react-native";
import { IProps } from "../../auth-app";

const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 pt-[20px] bg-[#201520]">
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
