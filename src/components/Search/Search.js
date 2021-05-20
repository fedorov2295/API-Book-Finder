import React, { useRef, useEffect, useState } from "react";
import _ from "lodash";
import { connect } from 'react-redux';
import classes from './Search.module.css';
import * as actions from '../../store/actions/actions'

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current = _.debounce(props.search, 1000);
    }, []);


    const handleSearchInputChanges = (e) => {
        inputRef.current(e.target.value, props);
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("")
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
        props.setLoading();
    };

    return (
        <div className={classes.Search}>
            <input
                type='text'
                ref={inputRef}
                value={searchValue}
                placeholder='Enter the name of book...'
                onChange={handleSearchInputChanges} />
            <button
                onClick={callSearchFunction}
                type="submit">Search</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.loading,
    }
  };

  const mapDispatchToProps = dispatch => {
      return {
        setLoading: () => dispatch(actions.setLoading()),
        search: (searchValue) => dispatch(actions.fetchingBooks(searchValue))
      }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Search);