import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: "1.jpg" },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "2.jpg" },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url:  "3.jpg" },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url:  "4.jpg",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url:  "5.jpg",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url:  "6.jpg",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "7.jpg",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url:  "8.jpg",
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url:  "9.jpg",
  },
];

createRoot(document.getElementById("root")).render(<App images={images} />);
