export enum ButtonType {
  Insert = 'insert',
  Update = 'update',
  Remove = 'remove',
}

export interface ButtonProps {
  type: ButtonType;
  text?: string;
  id?: number;
}

export const buttonTitles: Record<ButtonType, string> = {
  [ButtonType.Insert]: 'Insert Todo',
  [ButtonType.Update]: 'Update Todo',
  [ButtonType.Remove]: 'Remove Todo',
};

export type TodoCacheType = {
  id: number,
  text: string
};