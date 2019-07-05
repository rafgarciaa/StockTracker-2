import React, {
  useState,
  FunctionComponent,
  ChangeEvent,
  FormEvent,
} from 'react';

import { searchActionType } from '../../actions/quotesActions';

interface SearchInputProps {
  searchAction: searchActionType;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ searchAction }) => {
  const [searchText, setSearchText] = useState<string>('');

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
