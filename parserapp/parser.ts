import { IMessageParser } from '../contract/parser';
import { IMessage } from '../contract/message';

export class MessageParser implements IMessageParser {

    // here I replaced "for loop" by "map" so that now the code more leaner
    parseContent(content: string): IMessage[] {
        return content.split("\n").map(line => {
            const [message, timestamp] = line.split(":");

            // also I added trimming for strings with multiple whitespaces
            return { message: message.trim(), timestamp };
        });
    }
}
