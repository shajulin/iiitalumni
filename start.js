import { spawn, execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('========================================================');
console.log('  🎓 Starting IIIT Kottayam Alumni Portal (XAMPP + Vite)');
console.log('========================================================\n');

// 1. Verify / Start XAMPP services if available
try {
  console.log('🔄 Checking XAMPP services...');
  const status = execSync('/opt/lampp/lampp status 2>/dev/null || true', { encoding: 'utf8' });
  if (status.includes('Apache is running') && status.includes('MySQL is running')) {
    console.log('✅ XAMPP Apache & MySQL are RUNNING!');
  } else {
    // Attempt non-interactive start if sudo permits, or notify user
    try {
      execSync('sudo -n /opt/lampp/lampp startapache 2>/dev/null || true');
      execSync('sudo -n /opt/lampp/lampp startmysql 2>/dev/null || true');
    } catch {
      console.log('💡 Note: Start XAMPP using: sudo /opt/lampp/lampp start');
    }
  }
  console.log('   🔗 phpMyAdmin: http://localhost/phpmyadmin/');
  console.log('   🔗 PHP Backend API: http://localhost/alumni-portal/backend/api/\n');
} catch (e) {
  console.log('💡 If running with XAMPP, ensure Apache & MySQL are started: sudo /opt/lampp/lampp start\n');
}

// 2. Start Frontend Vite Server (Port 5173)
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
