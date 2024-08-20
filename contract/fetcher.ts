export interface IFileFetcher {
  fetchContent(filePath: string, params?: { body: string; method: string }): Promise<string>;
}