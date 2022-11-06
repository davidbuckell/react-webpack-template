import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useIsAuthenticated } from "@azure/msal-react";

const Search = (props) => {
    const isAuthenticated = useIsAuthenticated();
    var pages = isAuthenticated ? props.pages : props.pages.filter(p => !p.isSecure);    
    console.log('logged in: ' + isAuthenticated + '. pages: ' + JSON.stringify(pages));

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