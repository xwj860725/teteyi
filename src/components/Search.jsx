import React from 'react'
import { Search as SearchIcon } from 'lucide-react';

function Search() {
  return (
    <button className="p-0 bg-transparent border-none hover:text-red-600 active:text-red-700 ">
        <SearchIcon className="h-8 w-8 stroke-current stroke-[2]" absoluteStrokeWidth={false}/>
    </button>
  )
}

export default Search