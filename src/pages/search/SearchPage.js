import React from 'react';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import '../search/SearchPage.css';
import Response from '../../response';
import { Link } from 'react-router-dom';
import Search from './Search';

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
      </div>
    </div>
  )
}

export default SearchPage;
