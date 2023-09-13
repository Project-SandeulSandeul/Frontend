import useInput from '@/hooks/useInput';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from '../../styles/layout.module.scss';

const Search = () => {
    const {
        input: searchInputData,
        setInput: searchSetInputData,
        inputChangeHandler: searchInputChangeHandler,
    } = useInput();

    return (
        <form id={styles.searchForm}>
            <label htmlFor="search">
                <CiSearch />
            </label>
            <input
                type="text"
                id="search"
                placeholder="어떤 산을 찾으시나요?"
                value={searchInputData}
                onChange={searchInputChangeHandler}
            />
        </form>
    );
};

export default Search;
