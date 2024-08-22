export interface IFileFetcher {
  getContent(filePath: string): Promise<string>;
  postContent(filePath: string, params?: { body: string; method: string }): Promise<string>;
}