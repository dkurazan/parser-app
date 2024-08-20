import { IProcessor } from "../contract/processor";
import { IFileFetcher } from "../contract/fetcher";
import { IMessageParser } from "../contract/parser";
import { IMessageSaver } from "../contract/saver";

export class Processor implements IProcessor {
    constructor(
        private readonly fetcher: IFileFetcher,
        private readonly parser: IMessageParser,
        private readonly saver: IMessageSaver
    ) {}

    async processFiles(files: Map<string, string>): Promise<void> {
        // Promise<any> has replaced by Promise<void>
        const waitGroup: Promise<void>[] = [];

        for (const [input, output] of files) {
            const promise = new Promise<void>(async (resolve) => {

                // fetching all messages and timestamps corresponding to the specific filepath
                const content = await this.fetcher.fetchContent(input);

                // parsing solid text with messages and timestamps
                const messages = this.parser.parseContent(content);

                // for each message with timestamp: 
                // saving
                // sending POST request
                // logging in console
                await this.saver.saveContent(messages, output);

                resolve();
            });

            waitGroup.push(promise);
        }

        await Promise.all(waitGroup);
    }
}
