import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  Name,
  Tag,
  Location,
  StatsList,
  StatsElement,
  StatsText,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <img src={avatar} alt="User avatar" width="300" height="350" />
        <Name> {username}</Name>
        <Tag> @{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainer>

      <StatsList>
        <StatsElement>
          <StatsText>Followers</StatsText>
          <StatsText>{stats.followers}</StatsText>
        </StatsElement>
        <StatsElement>
          <StatsText>Views</StatsText>
          <StatsText> {stats.views}</StatsText>
        </StatsElement>
        <StatsElement>
          <StatsText>Likes</StatsText>
          <StatsText> {stats.likes}</StatsText>
        </StatsElement>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
