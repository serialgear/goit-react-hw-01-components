import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsList}>
      <ul key="FriendList" className={css.friendList}>
        {friends.map(el => (
          <FriendListItem key={el.id} friends={el} />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
