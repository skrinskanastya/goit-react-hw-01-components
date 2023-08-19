import {
  ProfileContainer,
  DescriptionContainer,
  Name,
  StatsList,
  StatsElement,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <img
          src={avatar}
          alt="User avatar"
          class="avatar"
          width="300"
          height="350"
        />
        <Name> {username}</Name>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </DescriptionContainer>

      <StatsList>
        <StatsElement>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </StatsElement>
        <StatsElement>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </StatsElement>
        <StatsElement>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </StatsElement>
      </StatsList>
    </ProfileContainer>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
// };
