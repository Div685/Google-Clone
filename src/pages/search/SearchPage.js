import React from 'react';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import '../search/SearchPage.css';
import Response from '../../response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from ''

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/" >
          <img className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google_logo"/>
        </Link>
      </div>
      <div className="searchPage__headerBody">
        <Search hideButtons />

        <div className="searchPage__options">

          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/all">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/all">Images</Link>
            </div>
          </div>

          <div className="searchPage__optionsRight">

          </div>

        </div>

      </div>
    </div>
  )
}

export default SearchPage;
