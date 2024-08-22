import { IApp } from "../contract/app";
import { files } from "../static_data";
import { FileFetcher } from "./fetcher";
import { MessageParser } from "./parser";
import { PromiseHandler } from "./promiseHandler";
import { IMessage } from "../contract/message";
import { MessageProcessor } from "./messageProcessor";

export class App implements IApp {
    private readonly fetcher;

    constructor() {
        this.fetcher = new FileFetcher();
    }

    processFiles([input, output]: [string, string]): Promise<void> {
        return new Promise<void>(async (resolve) => {
            const response = await this.fetcher.getContent(input);

            const parsedData = new MessageParser(response).parseContent();

            new PromiseHandler<IMessage>(
                parsedData,
                new MessageProcessor(this.fetcher, output).processMessage.bind(
                    this
                )
            ).handle();

            resolve();
        });
    }

    run(): Promise<void> {
        return new PromiseHandler(
            [...files],
            this.processFiles.bind(this)
        ).handle();
    }
}
