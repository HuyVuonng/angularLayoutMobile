import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createPostReducer } from './createPost.reducer';

export interface State {}
export const reducers: ActionReducerMap<State> = {
  createPost: createPostReducer,
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
