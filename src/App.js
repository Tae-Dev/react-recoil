import {
  RecoilRoot
} from 'recoil';
import TextInput from "./components/TextInput";
import "./styles/main.css";

const App = () => {
  return (
    <RecoilRoot>
    <div className="flex flex-col justify-center items-center  ">
       <p className="text-6xl">React Recoil</p>
      {/* <NumberCounter/>     */}
      <TextInput/>
    </div>
    </RecoilRoot>
  );
}

export default App;
