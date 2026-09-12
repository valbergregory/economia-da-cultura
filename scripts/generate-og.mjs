// Gera a imagem social padrão (1200×630) e o ícone apple-touch a partir de SVG.
import sharp from 'sharp';
const F = "'Segoe UI', 'Inter', Arial, sans-serif";
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f1521"/><stop offset="1" stop-color="#6e1f2e"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1040" cy="120" r="220" fill="#a87a1f" fill-opacity="0.18"/>
  <circle cx="1040" cy="120" r="140" fill="#a87a1f" fill-opacity="0.18"/>
  <text x="80" y="180" font-family="${F}" font-size="30" font-weight="700" letter-spacing="4" fill="#e9c88a">SITE PESSOAL · VALBER GREGORY</text>
  <text x="80" y="290" font-family="${F}" font-size="80" font-weight="800" fill="#fbf3ee">Economia da Cultura</text>
  <text x="80" y="380" font-family="${F}" font-size="80" font-weight="800" fill="#fbf3ee">e Entretenimento</text>
  <text x="80" y="470" font-family="${F}" font-size="34" fill="#f3d9c9">Textos semanais · crítica · poemas · música · destaques culturais</text>
  <rect x="80" y="520" width="160" height="6" rx="3" fill="#d9b45f"/>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og/default.png');
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#6e1f2e"/><path d="M36 14v22.6a7.5 7.5 0 1 0 4 6.6V22h8v-8H36zm-6.5 32a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="#fbf3ee"/></svg>`;
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('ok: public/og/default.png, public/apple-touch-icon.png');
