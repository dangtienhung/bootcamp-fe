import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { skillApi } from './services/skill.service';
import skillReducer from './slice/skill.slice';

export const store = configureStore({
  reducer: {
    [skillApi.reducerPath]: skillApi.reducer,
    skill: skillReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
