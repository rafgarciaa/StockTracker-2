import React, {
  useState,
  useEffect,
  FunctionComponent,
  ChangeEvent,
  FormEvent,
} from 'react';

import { searchActionType, fetchActionType } from '../../actions/quotesActions';

interface SearchInputProps {
  searchAction: searchActionType;
  fetchCompanyNames: fetchActionType;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
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
      <input type="text" onChange={handleChange} value={searchText} />
      <button onClick={handleSubmit}>CLICK ME</button>
    </form>
  );
};

export default SearchInput;
