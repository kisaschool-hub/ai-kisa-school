import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public');
const files = fs.readdirSync(dir).filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, path.basename(file, path.extname(file)) + '.webp');

  if (fs.existsSync(output)) {
    continue;
  }

  const meta = await sharp(input).metadata();
  const width = meta.width || 1600;
  const isMobile = /mobile|heromobile|donormobile|contactmobile|facilitiesmobile|aboutmobile|academicsmobile/i.test(file);
  const targetWidth = isMobile ? Math.min(width, 900) : Math.min(width, 1600);

  await sharp(input)
    .resize({ width: targetWidth, withoutEnlargement: true, fit: 'cover' })
    .webp({ quality: 72, effort: 6 })
    .toFile(output);

  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(`${file}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);
}
