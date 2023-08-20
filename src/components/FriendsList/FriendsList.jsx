import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsListItem/FriendListItem';
import { List, ListItem } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <ListItem key={friend.id}>
            <FriendListItem friend={friend} />
          </ListItem>
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
