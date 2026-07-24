import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const rootBuildsJson = path.join(projectRoot, 'builds.json');
const publicBuildsJson = path.join(projectRoot, 'public', 'builds.json');
const rootBuildsDir = path.join(projectRoot, 'builds');
const publicBuildsDir = path.join(projectRoot, 'public', 'builds');

try {
  // Sync builds.json
  if (fs.existsSync(rootBuildsJson)) {
    fs.copyFileSync(rootBuildsJson, publicBuildsJson);
    console.log('✓ Synced builds.json to public/builds.json');
  }

  // Sync builds directory
  if (fs.existsSync(rootBuildsDir)) {
    if (!fs.existsSync(publicBuildsDir)) {
      fs.mkdirSync(publicBuildsDir, { recursive: true });
    }
    fs.cpSync(rootBuildsDir, publicBuildsDir, { recursive: true });
    console.log('✓ Synced builds/ directory to public/builds/');
  }
} catch (err) {
  console.error('Error syncing builds data to public:', err);
  process.exit(1);
}
