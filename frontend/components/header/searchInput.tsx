import React, {
  useState,
  useEffect,
  FunctionComponent,
  ChangeEvent,
  FormEvent,
} from 'react';

import { searchActionType, fetchActionType } from '../../actions/quotesActions';

interface SearchInputProps {
  companyName: string;
  companySymbol: string;
  searchAction: searchActionType;
  fetchCompanyNames: fetchActionType;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  companyName,
  companySymbol,
  searchAction,
  fetchCompanyNames,
}) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    fetchCompanyNames();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    searchAction(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <i className="fas fa-search" />
      <div className="input__placeholder-wrap">
        <input
          type="text"
          onChange={handleChange}
          value={searchText}
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
      </div>
    </form>
  );
};

export default SearchInput;
