const fs = require('fs');
const path = require('path');
const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');

async function buildCSS() {
  console.log('Scanning project files for Tailwind classes...');
  const scanner = new Scanner({
    sources: [
      { base: path.resolve(__dirname, '..'), pattern: 'app/**/*.{ts,tsx,js,jsx}', negated: false },
      { base: path.resolve(__dirname, '..'), pattern: 'components/**/*.{ts,tsx,js,jsx}', negated: false },
      { base: path.resolve(__dirname, '..'), pattern: 'data/**/*.{ts,tsx,js,jsx}', negated: false },
    ],
  });

  const candidates = Array.from(scanner.scan());
  console.log(`Found ${candidates.length} candidate classes.`);

  const rawCss = `
@import "tailwindcss";

:root {
  --background: #020617;
  --foreground: #f8fafc;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #059669;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #10b981;
}

/* Islamic pattern subtle background utility */
.bg-islamic-pattern {
  background-color: #020617;
  background-image: radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px), radial-gradient(rgba(217, 119, 6, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.glass-card {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(51, 65, 85, 0.6);
}

.glass-card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card-hover:hover {
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.15);
  transform: translateY(-2px);
}
`;

  const compiler = await compile(rawCss, {
    from: path.resolve(__dirname, '../app/globals.css'),
    base: path.resolve(__dirname, '..'),
    onDependency: () => {},
  });

  const compiledCSS = compiler.build(candidates);
  console.log(`Generated CSS size: ${Math.round(compiledCSS.length / 1024)} KB`);

  const outputPath = path.resolve(__dirname, '../app/globals.css');
  fs.writeFileSync(outputPath, compiledCSS, 'utf8');
  console.log(`Successfully wrote compiled CSS to ${outputPath}`);
}

buildCSS().catch(console.error);
