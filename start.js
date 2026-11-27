import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('========================================================');
console.log('  🎓 Starting IIIT Kottayam Alumni Portal (Frontend Only)');
console.log('========================================================\n');

// Start Frontend Vite Server (Port 5173)
const frontend = spawn('npx', ['vite', '--host', '0.0.0.0'], {
  cwd: __dirname,
  stdio: 'inherit'
});

const cleanup = () => {
  console.log('\n🛑 Stopping Frontend server...');
  frontend.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
