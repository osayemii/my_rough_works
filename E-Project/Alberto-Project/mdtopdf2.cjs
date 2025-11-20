const fs = require('fs');
const path = require('path');

const mdFile = path.join(__dirname, '..', 'Report', 'eProject_Report copy.md');
const pdfFile = path.join(__dirname, '..', 'Report', 'eProject_Report copy.pdf');

console.log('Reading from:', mdFile);
console.log('Writing to:', pdfFile);

const markdownPdf = require('markdown-pdf');
markdownPdf().from(mdFile).to(pdfFile, function (err) {
  if (err) {
    console.error('Error:', err);
    process.exit(1);
  }
  console.log('Successfully created PDF!');
  console.log('Location:', pdfFile);
});
