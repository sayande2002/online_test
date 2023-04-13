import React from "react";
import { Link } from "react-router-dom";
import NewTooltip from "../../../lib/tooltip";
import { navbarLists } from "layout/navbar/navbarLists";

const LargeNavbar = () => {
  return (
    <nav className="mr-3 ml-auto hidden items-center justify-between gap-6 md:flex">
      {navbarLists.map(
        ({ id, name, component, route }) =>
          id <= 3 && (
            <NewTooltip key={id} title={name}>
              <Link
                className="font-semibold text-black no-underline focus:border-b-2 focus:border-black"
                to={route}
              >
                {name}
              </Link>
            </NewTooltip>
          )
      )}
    </nav>
  );
};

export default LargeNavbar;
