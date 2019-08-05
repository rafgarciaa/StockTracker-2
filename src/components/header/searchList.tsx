import React, { FunctionComponent } from 'react';
import { CompanyNameState } from '../../utilities/interfaces';
import SearchListItem from './searchListItem';

interface SearchListProps {
  companyNames: CompanyNameState[];
  getItemProps: (options: any) => void;
  isOpen: boolean;
  inputValue: string | null;
  highlightedIndex: number | null;
  selectedItem: any;
}

const SearchList: FunctionComponent<SearchListProps> = ({
  companyNames,
  getItemProps,
  isOpen,
  inputValue,
  highlightedIndex,
  selectedItem,
}) => {
  return (
    <ul className="header__top-search-list">
      {isOpen
        ? companyNames
            .filter(
              (company: CompanyNameState) =>
                !inputValue ||
                company.name
                  .toLowerCase()
                  .startsWith(inputValue.toLowerCase()) ||
                company.symbol
                  .toLowerCase()
                  .startsWith(inputValue.toLowerCase())
            )
            .slice(0, 6)
            .map((company: CompanyNameState, index: number) => (
              <SearchListItem
                key={company.symbol}
                company={company}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                index={index}
                selectedItem={selectedItem}
              />
            ))
        : null}
    </ul>
  );
};

export default SearchList;
