export interface IApp {
    processFiles([input, output]: [string, string]): Promise<void>;
    run(): Promise<void>;
}
