import { promises as fs } from 'fs';

async function ReadingFile() {
  try {
    const data = await fs.readFile("test.txt", "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

async function Data() {
  const ans = await ReadingFile();
  console.log(ans);
}

Data();