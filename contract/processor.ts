export interface IProcessor {
  processFiles(files: Map<string, string>): Promise<void>;
}