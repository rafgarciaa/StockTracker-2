import React, { FunctionComponent } from 'react';
import { CompanyNameState } from '../../utilities/interfaces';
import Downshift from 'downshift';

interface SearchListProps {
  companyNames: CompanyNameState[];
  getItemProps: (options: any) => void;
  isOpen: any;
  inputValue: any;
  highlightedIndex: any;
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
            .slice(0, 5)
            .map((company: CompanyNameState, index: number) => (
              <li
                key={company.symbol}
                {...getItemProps({
                  key: company.symbol,
                  index,
                  item: company,
                  style: {
                    backgroundColor:
                      highlightedIndex === index ? 'lightgray' : 'black',
                    fontWeight: selectedItem === company ? 'bold' : 'normal',
                  },
                })}
              >
                {`${company.name} (${company.symbol})`}
              </li>
            ))
        : null}
    </ul>
  );
};

export default SearchList;
