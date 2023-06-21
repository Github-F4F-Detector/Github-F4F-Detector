import User from './userTypes';

export interface FetchFollowingInfoResult {
  following: User[];
  nonFollowing: User[];
  matchingUsers: User[];
}
