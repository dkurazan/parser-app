import { IFileFetcher } from "../contract/fetcher";
import { responsesSource } from "../static_data";

export class FileFetcher implements IFileFetcher {
    private readonly responses: Map<string, string> = responsesSource;

    async getContent(filePath: string): Promise<string> {
        try {
            return new Promise((resolve) => {
                resolve(this.responses.get(filePath) ?? "");
            });
        } catch (error) {
            console.error(`Error while getting file ${filePath} - ${error}`);

            return new Promise((resolve) => {
                resolve("");
            });
        }
    }

    async postContent(
        filePath: string,
        params?: { body: string; method: string }
    ): Promise<string> {
        try {
            await new Promise<void>((resolve) =>
                setTimeout(resolve, Math.random() * 5000)
            );

            return new Promise((resolve) => {
                resolve("");
            });
        } catch (error) {
            console.error(`Error while reading file ${filePath} - ${error}`);

            return new Promise((resolve) => {
                resolve("");
            });
        }
    }
}
