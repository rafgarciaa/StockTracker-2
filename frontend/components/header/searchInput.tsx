import React, { useEffect, FunctionComponent } from 'react';
import { SetCompanyNamesAction } from '../../actions/quotesActions';
import { SetErrorAction } from '../../actions/fetchStatusActions';

import {
  CompanyNameState,
  searchActionType,
  fetchActionType,
} from '../../utilities/interfaces';
import SearchList from './searchList';

import Downshift from 'downshift';

interface SearchInputProps {
  companyNames: CompanyNameState[];
  companyName: string | null;
  companySymbol: string | null;
  searchAction: (symbol: string) => void;
  fetchCompanyNames: () => Promise<SetCompanyNamesAction | SetErrorAction>;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  companyNames,
  companyName,
  companySymbol,
  searchAction,
  fetchCompanyNames,
}) => {
  useEffect(() => {
    fetchCompanyNames();
  }, []);

  return (
    <div className="header__top-search-bar">
      <i className="fas fa-search" />
      <Downshift
        onChange={(selection: CompanyNameState) =>
          selection ? searchAction(selection.symbol) : ''
        }
        itemToString={() => ''}
        defaultHighlightedIndex={0}
        initialHighlightedIndex={null}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div className="input__placeholder-wrap">
            <label htmlFor="search" {...getLabelProps()} />
            <input
              id="search"
              type="text"
              {...getInputProps()}
              required={true}
            />
            <span className="input__placeholder-wrap--name">
              {companyName ? companyName : 'Search...'}
              {companyName && companySymbol ? (
                <b className="input__placeholder-wrap--symbol">{` (${companySymbol})`}</b>
              ) : (
                ''
              )}
            </span>

            <SearchList
              companyNames={companyNames}
              getItemProps={getItemProps}
              isOpen={isOpen}
              inputValue={inputValue}
              highlightedIndex={highlightedIndex}
              selectedItem={selectedItem}
            />
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default SearchInput;
