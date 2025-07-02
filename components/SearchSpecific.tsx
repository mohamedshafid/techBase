import { BellDot, Search } from 'lucide-react';
import React from 'react'
import InputField from './InputField';

const SearchSpecific = () => {
  return (
    <div className="flex items-center gap-4">
      <BellDot />
      <InputField
        id="search"
        name="search"
        type="text"
        placeholder="Search ..."
        icon={Search}
      />
    </div>
  );
}

export default SearchSpecific