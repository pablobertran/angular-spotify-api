import {SpotifyCursorModel} from './SpotifyCursor.model';

export interface SpotifyCursorPagingModel {
  cursors: SpotifyCursorModel;
  href: string;
  items: any[];
  limit: number;
  next: string;
  total: number;
}
