import React, { FunctionComponent } from 'react';
import { CompanyNameState } from '../../utilities/interfaces';

interface SearchListProps {
  company: CompanyNameState;
  getItemProps: (options: any) => void;
  highlightedIndex: number | null;
  index: number;
  selectedItem: any;
}

const SearchList: FunctionComponent<SearchListProps> = ({
  company,
  getItemProps,
  highlightedIndex,
  index,
  selectedItem,
}) => {
  return (
    <li
      {...getItemProps({
        index,
        item: company,
        style: {
          backgroundColor: highlightedIndex === index ? '#8e939f' : '#102238',
          fontWeight: selectedItem === company ? 'bold' : 'normal',
        },
      })}
    >
      {`${company.name} (${company.symbol})`}
    </li>
  );
};

export default SearchList;
