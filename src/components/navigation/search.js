import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const Search = (props) => {
    var pages = props.pages;
    console.log('pages: ' + JSON.stringify(pages));

    const handleOnSearch = (string, results) => {
        // string = search term, results = search results
        console.log(string, results);
    }

    const handleOnSelect = (item) => {
        console.log(item);
    }

    const formatResult = (item) => {
        return (
          <>
            {/*<span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>*/}
            <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
          </>
        )
      }

    return (
        <section id="search" className="alt">
            <ReactSearchAutocomplete
                items={pages}
                fuseOptions={{ keys: ["title"] }}
                resultStringKeyName="title"
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                placeholder="Search"
            />
        </section>
    );
};

export default Search;