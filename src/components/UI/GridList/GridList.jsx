import { List } from './GridList.styled';

export const GridList = ({ children, style }) => {
  return <List style={style}>{children}</List>;
};
