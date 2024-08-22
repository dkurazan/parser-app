import { IRequestFormatter } from "../contract/requestFormatter";

export class RequestBodyFormatter implements IRequestFormatter {
    constructor(private readonly data: Map<string, any>) {
        const type = this.getMessageType();
        this.data.set("type", type);
    }

    private getMessageType(): string {
        const message = this.data.get("message") as string;

        return message.length > 8 ? "long" : "short";
    }

    toJSON(): string {
        const plainObject: Record<string, any> = {};

        this.data.forEach((value, key) => {
            plainObject[key] = value;
        });

        return JSON.stringify(plainObject);
    }
}
