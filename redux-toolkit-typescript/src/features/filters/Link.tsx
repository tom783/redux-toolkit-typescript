import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./filterSlice";
import { State } from "../../selector";

interface PropsType {
  children: React.ReactNode;
  filter: string;
}

const Link: React.FC<PropsType> = ({ children, filter }) => {
  const dispatch: Dispatch<unknown> = useDispatch();
  const active: boolean = useSelector((state: State): boolean => {
    return state.filter === filter;
  });

  const onClick: () => void = (): void => {
    dispatch(setFilter(filter));
  };

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
};

export default Link;
