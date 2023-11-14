import ImageSlider from "./ImageSlider";
import "./App.css";

const App = () => {
  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
  ];

  return (
    <div className="App">
      <h1>React Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
