import { stringify } from "csv-stringify/sync"
import { createWriteStream, WriteStream } from "fs"


function csvCreator(data: string[][]): void {
  const stringifier: string = stringify(data);

  const writeStream: WriteStream = createWriteStream("output.csv", { flags: "a" });
  writeStream.write(stringifier);
}

export { csvCreator }
