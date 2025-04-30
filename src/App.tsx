import "./App.css";

import { QRCodeSVG } from "qrcode.react";

function App() {
  return (
    <>
      <QRCodeSVG
        imageSettings={{
          src: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
          height: 50,
          width: 50,
          excavate: false,
        }}
        className="m-96"
        value={"https://tailwindcss.com/docs/installation/using-vite"}
      />
    </>
  );
}

export default App;
