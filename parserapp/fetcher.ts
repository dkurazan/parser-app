import { IFileFetcher } from "../contract/fetcher";
import { responsesSource } from "../static_data";

export class FileFetcher implements IFileFetcher {
    // importing responses data
    private readonly responses: Map<string, string> = responsesSource;

    async fetchContent(
        filePath: string,
        params?: { body: string; method: string }
    ): Promise<string> {

        // I placed error handling here because
        // it's more convinient in my opinion
        // to check request for errors in one file
        try {

            // also I replaced returning an empty string by returning a Promise
            if (params?.method === "POST") {
                return new Promise((resolve) => {
                    resolve("");
                });
            }

            return new Promise((resolve) => {
                resolve(this.responses.get(filePath) ?? "");
            });
        } catch (error) {
            console.error(
                this.clasifyErrorText(params?.method, filePath, error)
            );

            return new Promise((resolve) => {
                resolve("");
            });
        }
    }

    // I moved this logic in the separate method to make   
    // the "fetchContent" method more readable
    private clasifyErrorText(
        method: string | undefined,
        path: string,
        error: Error | unknown
    ) {
        return `Error while ${
            method === "POST" ? "reading" : "getting"
        } file ${path} - ${error}`;
    }
}
