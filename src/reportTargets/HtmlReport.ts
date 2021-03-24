import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
        `;

    // First argument path and name of file, second data
    // to write in file. This creates report.html inside
    // our project root directory
    fs.writeFileSync('report.html', html);
  }
}
