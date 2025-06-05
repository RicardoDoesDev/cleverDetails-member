const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CATEGORIES_DIR = path.join(__dirname, '../public/images/categorias');
const OPTIMIZED_DIR = path.join(__dirname, '../public/images/categorias/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR);
}

// Get all images in the categories directory
const images = fs.readdirSync(CATEGORIES_DIR)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

console.log(`Found ${images.length} images to optimize...`);

// Process each image
async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(CATEGORIES_DIR, image);
    const outputPath = path.join(OPTIMIZED_DIR, `optimized-${image.replace(/\.[^.]+$/, '.webp')}`);
    
    try {
      await sharp(inputPath)
        .resize(800, 600, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
      const optimizedSize = fs.statSync(outputPath).size / (1024 * 1024);
      
      console.log(`✓ ${image}:`);
      console.log(`  Original: ${originalSize.toFixed(2)}MB`);
      console.log(`  Optimized: ${optimizedSize.toFixed(2)}MB`);
      console.log(`  Reduction: ${((1 - optimizedSize/originalSize) * 100).toFixed(1)}%\n`);
    } catch (error) {
      console.error(`✗ Failed to optimize ${image}:`, error.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('Optimization complete!');
}); 