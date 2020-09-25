import React from "react";
import Link from "./Link";
import { filterType } from "./filterSlice";

const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <Link filter={filterType.SHOW_ALL}>All</Link>
    <Link filter={filterType.SHOW_ACTIVE}>Active</Link>
    <Link filter={filterType.SHOW_COMPLETED}>Completed</Link>
  </div>
);

export default Footer;
