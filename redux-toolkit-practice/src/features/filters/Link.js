import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "./filterSlice";

const Link = ({ children, filter }) => {
  const dispatch = useDispatch();

  const active = useSelector((state) => {
    const { filter: visibilityFilter } = state;
    return visibilityFilter === filter;
  });

  const onClick = () => {
    dispatch(setVisibilityFilter(filter));
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

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
