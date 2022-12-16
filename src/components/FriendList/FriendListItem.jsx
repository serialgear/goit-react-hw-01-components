import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({ friends: { isOnline, avatar, name } }) => {
  return (
    <li className={css.friendListItem}>
      <span
        className="status"
        style={{
          backgroundColor: isOnline ? 'red' : 'green',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          marginLeft: '10px',
        }}
      ></span>
      <img
        className="friend-list-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.object.isRequired,
};
