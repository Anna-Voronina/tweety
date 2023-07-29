export const selectAllUsers = (state) => state.users.users;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectLimit = (state) => state.users.limit;
export const selectFollowingInProgress = (state) =>
  state.users.followingInProgress;
