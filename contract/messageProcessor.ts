import { IMessage } from './message';
 
export interface IMessageProcessor {
  processMessage(messageObj: IMessage): Promise<void>;
}