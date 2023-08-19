import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
