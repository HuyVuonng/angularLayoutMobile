import { createReducer, on } from '@ngrx/store';
import { createPostAction } from './creatForm.action';

export interface initialStateInterface {
  idTemplate: string;
  title: string;
  des: string;
  keyWord: string;
  tag: string;
  category: string;
}

export const initialState: initialStateInterface = {
  idTemplate: '',
  title: '',
  des: '',
  keyWord: '',
  tag: '',
  category: '',
};

export const createPostReducer = createReducer(
  initialState,
  on(createPostAction, (state, action) => {
    return action.data;
  }),
);
