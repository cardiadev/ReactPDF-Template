import VistaPdf from "./components/VistaPdf";
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import "./App.css";

function App() {

  function crearPDF(){
    ReactPDF.render(<VistaPdf />, `example.pdf`);
  }


  return (
    <div className="App">
      <h1>Esto genera PDF 👍🏻</h1>
      <PDFDownloadLink document={<VistaPdf />} fileName="somename.pdf">
      <button>Genera PDF</button>
      </PDFDownloadLink>
      <br/>
      <br/>
      <PDFViewer style={{ width:'60vw', height:'80vh'}}>
        <VistaPdf />
      </PDFViewer>
    </div>
  );
}

export default App;
