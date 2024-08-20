import { IMessage } from './message';

export interface IMessageParser {
  parseContent(content: string): IMessage[];
}