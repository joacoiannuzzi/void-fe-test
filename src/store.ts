import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postsApi } from '@/services/posts';
import { valorantApi } from '@/services/valorant';

export const store = configureStore({
  reducer: combineReducers({
    [valorantApi.reducerPath]: valorantApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      postsApi.middleware,
      valorantApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
