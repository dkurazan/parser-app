import { IMessageParser } from "../contract/parser";
import { IMessage } from "../contract/message";

export class MessageParser implements IMessageParser {
    constructor(private readonly input: string) {}

    parseContent(): IMessage[] {
        return this.input.split("\n").map((line) => {
            const [message, timestamp] = line.split(":");

            const messageObj = new Map([
                ["message", message.trim()],
                ["timestamp", timestamp],
            ]);

            return messageObj;
        });
    }
}
