import { FriendListItem } from '../FriendsListItem/FriendListItem';
import { List } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <li key={friend.id} class="item">
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </List>
  );
};
