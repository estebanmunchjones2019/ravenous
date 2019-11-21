import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
     
     constructor(props){
       super(props);
       this.state = {
         term: '',
         location: '',
         sortBy: 'best_match'
       };
       this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count',
        };
        this.getSortByClass = this.getSortByClass.bind(this);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
     }

     getSortByClass(sortByOption){
       if (this.state.sortBy === sortByOption){
         return 'active';
       }else {
         return '';
       }
     }

     handleSortByChange(sortByOption){
       this.setState({ sortBy: sortByOption})
     }

     handleTermChange(e){
       this.setState({
         term: e.target.value
       });
     }
    
     handleLocationChange(e){
      this.setState({
        location: e.target.value
      });
     }

     handleSearch(e){
       this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
       e.preventDefault();
     }

     renderSortByOptions (){
      return Object.keys(this.sortByOptions).map((sortByOption)=>{
          let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
      });    // this.handleSortByChange.bind(this, sortByOptionValue) is a shortcut. It ensures that the method is called the correc this inside, and with the correct argument.
    }

    render(){
        return (
            <div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
              </div>
              <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
              </div>
          </div>
        )
    }
}

export default SearchBar;