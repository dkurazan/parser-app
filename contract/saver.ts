import { IMessage } from './message';
 
export interface IMessageSaver {
  saveContent(messages: IMessage[], file: string): Promise<void>;
}