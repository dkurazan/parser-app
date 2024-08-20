import { IApp } from "../contract/app";
import { IProcessor } from "../contract/processor";
import { files } from "../static_data";
import { FileFetcher } from "./fetcher";
import { MessageParser } from "./parser";
import { Processor } from "./processor";
import { MessageSaver } from "./saver";

export class App implements IApp {
    private readonly processor: IProcessor;

    // I chose this structure of linking classes instead of
    // creating "new Processor" class and putting "new FileFetcher", 
    // "new MessageParser" and "new MessageSaver" as a props because 
    // I think it looks a bit more readable
    constructor() {
        const fetcher = new FileFetcher();
        const parser = new MessageParser();
        const saver = new MessageSaver(fetcher);
        this.processor = new Processor(fetcher, parser, saver);
    }

    async run(): Promise<void> {
        // passing input and output paths
        await this.processor.processFiles(files);
    }
}
