import React from 'react';
import { Page, Text, View, Document, StyleSheet } from './common/reactPdf';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#e3e3e3'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        <Text style={{fontWeight:'bold', color:'red', fontSize:'50px'}}>Hola mundo</Text>
        <Text>Section #2 asdgsdfgsdfgsdfgsdf</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2 asdgsdfgsdfgsdfgsdf</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;