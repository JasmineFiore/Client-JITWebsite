import React, { useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

function MyDocument({ file, fileName, setisPDFMode }) {
  useEffect(() => {
    setisPDFMode(true);
    return () => setisPDFMode(false);
  }, [setisPDFMode]);

  const docs = [
    {
      uri: `/pdfs/${file}`,
      fileType: "pdf",
      fileName: fileName
    }
  ];

  return (
    <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      config={{
        header: {
          disableHeader: false,
          disableFileName: false,
          retainURLParams: false,
        },
        pdfZoom: {
          defaultZoom: 0.4,
          zoomJump: 0.2,
        },
        pdfVerticalScrollByDefault: false,
      }}
      style={{ height: "100vh" }}
    />
  );
}

export default MyDocument;
