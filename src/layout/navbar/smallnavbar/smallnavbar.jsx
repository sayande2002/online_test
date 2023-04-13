import React, { useState } from "react";
import { Link } from "react-router-dom";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { navbarLists } from "layout/navbar/navbarLists";

const SmallNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="relative z-10 ml-3 flex cursor-pointer items-center justify-center md:hidden">
        {/* {!open ? (
          <MenuRoundedIcon
            onClick={() => setOpen(!open)}
            sx={{ fontSize: "40px" }}
          />
        ) : (
          <CloseRoundedIcon
            onClick={() => setOpen(!open)}
            sx={{ fontSize: "40px" }}
          />
        )} */}
      </nav>
      <div
        className={`absolute ${
          open ? "top-[98px]" : "top-[-320px]"
        }  -z-50 flex w-full flex-col items-center justify-between bg-white md:hidden`}
      >
        {navbarLists.map(
          ({ id, name, component, route }) =>
            id <= 3 && (
              <Link
                key={id}
                onClick={() => setOpen(!open)}
                className="-z-10 flex w-full items-center justify-center gap-2 py-3 font-semibold text-black no-underline hover:bg-slate-200"
                to={route}
              >
                {component}
                <span>{name}</span>
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default SmallNavbar;
