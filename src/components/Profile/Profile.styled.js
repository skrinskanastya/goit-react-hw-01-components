import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  width: 264px;

  margin-left: auto;
  margin-right: auto;
`;
export const DescriptionContainer = styled.div`
  border-radius: 0px 0px 4px 4px;
  background-color: #f4f4fd;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  padding: 5px;
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
export const Tag = styled.p`
  text-align: center;
  font-size: 20px;
`;
export const Location = styled.p`
  text-align: center;
  font-size: 20px;
`;
export const StatsList = styled.ul`
  background-color: #35a29f;
  color: #fff;
  display: flex;
  gap: 15px;
  padding: 10px;
  justify-content: center;
`;
export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const StatsText = styled.span`
  font-size: 20px;
`;
