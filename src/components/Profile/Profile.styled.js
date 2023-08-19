import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  width: 264px;
  height: 380px;
  margin-left: auto;
  margin-right: auto;
`;
export const DescriptionContainer = styled.div`
  border-radius: 0px 0px 4px 4px;
  background-color: #f4f4fd;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
export const StatsList = styled.ul`
  list-style: none;
  background-color: teal;
  color: #fff;
  display: flex;
  gap: 5px;
  padding: 10px;
  justify-content: center;
`;
export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
`;
