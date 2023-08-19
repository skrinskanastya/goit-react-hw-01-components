import { CardWrapper } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  return (
    <CardWrapper>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </CardWrapper>
  );
};
