import PropTypes from 'prop-types';
import { CardWrapper, FriendStatus, FriendName } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  return (
    <CardWrapper>
      <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </CardWrapper>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
  }).isRequired,
};
