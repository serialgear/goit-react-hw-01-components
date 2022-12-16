import PropTypes from 'prop-types';
import './Profile.css';

export const Profile = ({
  profile: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="list">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="list">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="list">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};
