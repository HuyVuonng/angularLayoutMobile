import { createAction, props } from '@ngrx/store';
import { initialStateInterface } from './createPost.reducer';

export const createPostAction = createAction(
  'createPost',
  props<{ data: initialStateInterface }>(),
);
