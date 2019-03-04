import React from "react";
import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";
import pdfstyles from "./pdfstyles";

// Create Document Component
const PDFPreview = ({ title, story }) => (
  <PDFViewer className="viewer">
    <Document>
      <Page size="A4" style={pdfstyles.page}>
        <View style={pdfstyles.section}>
          <Text style={pdfstyles.title}>{title}</Text>
          <Text>This is a text in a generated PDF file.</Text>
          <Text className="text">Write your Story</Text>
          <Text style={pdfstyles.story}>{story}</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDFPreview;