export interface IPromiseHandler {
  handle(): Promise<void>;
}