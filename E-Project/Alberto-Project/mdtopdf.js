const fs = require('fs');
const path = require('path');

const mdFile = path.join(__dirname, '..', 'Report', 'eProject_Report.md');
const pdfFile = path.join(__dirname, '..', 'Report', 'eProject_Report.pdf');

console.log('Reading from:', mdFile);
console.log('Writing to:', pdfFile);

try {
  const markdownPdf = require('markdown-pdf');
  console.log('Using markdown-pdf...');
  markdownPdf().from(mdFile).to(pdfFile, function (err) {
    if (err) {
      console.error('Error:', err);
      process.exit(1);
    }
    console.log('Successfully created PDF!');
    console.log('Location:', pdfFile);
  });
} catch (e) {
  console.error('markdown-pdf not found. Installing...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install markdown-pdf --no-save', { cwd: __dirname, stdio: 'inherit' });
    const markdownPdf = require('markdown-pdf');
    markdownPdf().from(mdFile).to(pdfFile, function (err) {
      if (err) {
        console.error('Error:', err);
        process.exit(1);
      }
      console.log('Successfully created PDF!');
      console.log('Location:', pdfFile);
    });
  } catch (installErr) {
    console.error('Failed to install markdown-pdf:', installErr.message);
    console.error('\nPlease try running:');
    console.error('npm install markdown-pdf --no-save');
    process.exit(1);
  }
}
