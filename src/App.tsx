import "./App.css";

import { QRCodeSVG } from "qrcode.react";

function App() {
  return (
    <>
      <QRCodeSVG
        className="m-96"
        value={"https://tailwindcss.com/docs/installation/using-vite"}
      />
    </>
  );
}

export default App;
