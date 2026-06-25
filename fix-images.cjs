const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function processFiles() {
  const srcDir = path.join(__dirname, 'src');
  
  walkDir(srcDir, function(filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Special case for logo
      content = content.replace(
        /https:\/\/rajasthangauravtravels\.com\/img\/site-logo-border\.png/g,
        'https://placehold.co/250x80/FFD700/000000/png?text=Travels+Logo'
      );
      
      // General case for all other images
      // Replace with picsum using the filename as seed
      content = content.replace(
        /https:\/\/rajasthangauravtravels\.com\/img\/([^"'\s?#]+)/g,
        (match, filename) => {
          // just use the filename base as the seed
          let seed = filename.replace(/[^a-zA-Z0-9]/g, '');
          return `https://picsum.photos/seed/${seed}/800/600`;
        }
      );
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

processFiles();
