import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categories = JSON.parse(fs.readFileSync('./src/categories.json', 'utf-8'));

const memeData = {};

categories.forEach(category => {
  const folderPath = path.join(__dirname, 'public', category.folder);

  try {
    const files = fs.readdirSync(folderPath);
    const memes = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/${category.folder}/${file}`);

    memeData[category.slug] = memes;
    console.log(`✅ Found ${memes.length} memes in "${category.title}"`);
  } catch (err) {
    console.error(`❌ Error reading folder "${category.folder}":`, err.message);
  }
});

// Write the meme data to a JSON file
fs.writeFileSync(
  './src/memes-data.json',
  JSON.stringify(memeData, null, 2)
);

console.log('\n✅ Memes manifest generated successfully!');
console.log(`📊 Total categories: ${Object.keys(memeData).length}`);
console.log(`📊 Total memes: ${Object.values(memeData).flat().length}`);

