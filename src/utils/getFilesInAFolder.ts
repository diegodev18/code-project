import { promises as fs } from 'fs';
import path from 'path';

export async function countFiles(folderPath: string): Promise<number> {
  let fileCount = 0;

  const files = await fs.readdir(folderPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(folderPath, file.name);

    if (file.isDirectory()) {
      fileCount += await countFiles(filePath); // Recursión para subcarpetas
    } else if (file.isFile()) {
      fileCount += 1;
    }
  }

  return fileCount;
}
