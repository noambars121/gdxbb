const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
fs.mkdirSync(dir, { recursive: true });

const items = [
  { file: 'santi-marzi-preview.svg', color: '#1C2636', label: 'Santi Marzi' },
  { file: 'project-2-preview.svg', color: '#9A7B2E', label: 'Pizza Buena' },
  { file: 'project-3-preview.svg', color: '#0369A1', label: 'BarsBuild' },
];

for (const { file, color, label } of items) {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="192" viewBox="0 0 512 192">',
    `<rect width="512" height="192" fill="${color}"/>`,
    `<text x="256" y="96" fill="#F7F4EE" font-family="Arial,sans-serif" font-size="22" font-weight="700" text-anchor="middle" dominant-baseline="middle">${label}</text>`,
    '</svg>',
  ].join('');
  fs.writeFileSync(path.join(dir, file), svg);
}

console.log('Preview SVGs created in public/images');
