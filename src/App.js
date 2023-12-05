import "./styles.css";
import { Router } from "./router/Router";

const user = {
  name: "asa",
  email: "asas@gmail.com",
  image: "https://source.unsplash.com/KnSYF3b4KcM",
  phone: "090-0890-0900",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

export default function App() {
  return <Router />;
}
