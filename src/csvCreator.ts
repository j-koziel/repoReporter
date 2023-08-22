import { stringify } from "csv-stringify/sync"
import { createWriteStream, WriteStream } from "fs"


function issuesCsvCreator(issues: string[][]): void {
  const stringifier: string = stringify(issues);

  const writeStream: WriteStream = createWriteStream("output.csv", { flags: "a" });
  writeStream.write(stringifier);
}

export { issuesCsvCreator }
