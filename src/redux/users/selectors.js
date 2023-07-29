import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./../filter/selectors";

export const selectAllUsers = (state) => state.users.users;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectFollowingInProgress = (state) =>
  state.users.followingInProgress;

export const selectFilteredData = createSelector(
  [selectAllUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case "follow":
        return users.filter((user) => !user.isFollowed);
      case "following":
        return users.filter((user) => user.isFollowed);
      default:
        return users;
    }
  }
);
