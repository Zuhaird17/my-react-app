// App.jsx
import { ColorPallet } from "./components/ColorPallet";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="w-full">
      <Header/>
      <ColorPallet/>
      <Footer/>
    </div>
  );
}
