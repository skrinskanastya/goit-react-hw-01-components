import { styled } from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
`;
export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  background-color: #f4f4fd;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;
export const StatsTitle = styled.h2`
  text-align: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #35a29f;
  padding: 5px;
`;
export const StatsLabel = styled.span`
  color: #fff;
  margin-bottom: 5px;
`;
export const StatsPercentage = styled.span`
  color: #fff;
  font-size: 20px;
`;
