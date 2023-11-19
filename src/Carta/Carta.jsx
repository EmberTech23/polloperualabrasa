import React from 'react';
import { Document, Page } from 'react-pdf';

function Carta() {
  return (
    <div>
      <Document file="/pdf/menu.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Carta;
