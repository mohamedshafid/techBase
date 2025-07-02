import React from "react";
import SearchSpecific from "./SearchSpecific";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({
  title,subtitle
}:HeaderProps) => {
  return (
    <div className="flex-between">
      <div>
        <h1 className="heading">{title}</h1>
        <p className="sub-heading">{subtitle}</p>
      </div>

      {/* Search Specific Component */}
      <SearchSpecific />
    </div>
  );
};

export default Header;
