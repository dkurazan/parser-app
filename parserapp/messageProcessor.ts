import { IFileFetcher } from "../contract/fetcher";
import { IMessage } from "../contract/message";
import { IMessageProcessor } from "../contract/messageProcessor";
import { Logger } from "./logger";
import { RequestBodyFormatter } from "./requestFormatter";

export class MessageProcessor implements IMessageProcessor {
    constructor(
        private readonly fetcher: IFileFetcher,
        private readonly filePath: string
    ) {}

    processMessage(messageObj: IMessage): Promise<void> {
        return new Promise<void>(async (resolve) => {
            const requestBody = new RequestBodyFormatter(messageObj).toJSON();

            await this.fetcher.postContent(this.filePath, {
                body: requestBody,
                method: "POST",
            });

            new Logger(messageObj, this.filePath).print();

            resolve();
        });
    }
}
