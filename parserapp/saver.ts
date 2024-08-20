import { IMessageSaver } from "../contract/saver";
import { IMessage } from "../contract/message";
import { IFileFetcher } from "../contract/fetcher";

export class MessageSaver implements IMessageSaver {
    constructor(private readonly fetcher: IFileFetcher) {}

    async saveContent(messages: IMessage[], file: string): Promise<void> {
        // Promise<any> has replaced by Promise<void>
        const waitGroup: Promise<void>[] = [];

        // "for loop" replaced by "for of loop"
        for (const messageObj of messages) {
            const promise = new Promise<void>(async (resolve) => {
                // delay simulating was moved to separate method
                await this.simulateDelay();

                // request body moved to separate variable to make code more readable
                const requestBody = JSON.stringify({
                    ...messages,
                    type: messageObj.message.length > 8 ? "long" : "short",
                });

                // sending POST request
                await this.fetcher.fetchContent(file, {
                    body: requestBody,
                    method: "POST",
                });

                // Length classification moved in the separate method to make code more readable
                console.log(
                    `Saved message - ${
                        messageObj.message
                    } to ${file} as ${this.clasifyLength(messageObj.message)}`
                );
                resolve();
            });

            waitGroup.push(promise);
        }

        await Promise.all(waitGroup);
    }

    private async simulateDelay(): Promise<void> {
        return new Promise<void>((resolve) =>
            setTimeout(resolve, Math.random() * 5000)
        );
    }


    private clasifyLength(message: string): string {
        return message.length > 8 ? "long" : "short";
    }
}
