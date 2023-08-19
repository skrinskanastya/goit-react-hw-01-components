export const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} class="item">
            <span class="status">{friend.isOnline}</span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
