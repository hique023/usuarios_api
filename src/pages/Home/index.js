// Global
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";

// styles
import "./styles.css";

export default function Home() {
  return (
    <div className="containerHome">
      <TopBar />
      <div className="containerCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
