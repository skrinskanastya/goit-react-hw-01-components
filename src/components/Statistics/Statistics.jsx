import PropTypes from 'prop-types';
import {
  StatsWrapper,
  StatsList,
  StatsTitle,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      <StatsWrapper>
        {title && <StatsTitle> {title}</StatsTitle>}

        <StatsList>
          {stats.map(item => {
            return (
              <StatsItem key={item.id}>
                <StatsLabel>{item.label} </StatsLabel>
                <StatsPercentage>{item.percentage}%</StatsPercentage>
              </StatsItem>
            );
          })}
        </StatsList>
      </StatsWrapper>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
