import { stringify } from "csv-stringify/sync"
import { Stringifier } from "csv-stringify/browser/esm"
import { createWriteStream } from "fs"


function issuesCsvCreator(issues: any): void {
  const stringifier: string = stringify(issues);

  const writeStream = createWriteStream("output.csv", { flags: "a" });
  writeStream.write(stringifier);
}

export { issuesCsvCreator }
