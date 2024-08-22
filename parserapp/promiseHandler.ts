import { IPromiseHandler } from "../contract/processor";

export class PromiseHandler<T> implements IPromiseHandler {
  constructor(
    private readonly array: T[],
    private readonly resolvePromise: (item: T) => Promise<void>
  ) {}

  async handle(): Promise<void> {
    const waitGroup: Promise<void>[] = [];

    for (const item of this.array) {
      const promise = this.resolvePromise(item);

      waitGroup.push(promise)
    }

    await Promise.all(waitGroup)
  }
}