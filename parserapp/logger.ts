import { ILogger } from "../contract/logger";
import { IMessage } from "../contract/message";

export class Logger implements ILogger {
    constructor(
        private readonly message: IMessage,
        private readonly file: string
    ) {}

    print(): void {
        console.log(
            `Saved message - ${this.message.get("message")} to ${
                this.file
            } as ${this.message.get("message")!.length > 8 ? "long" : "short"}`
        );
    }
}
