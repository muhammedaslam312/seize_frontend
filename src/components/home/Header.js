import React, { useState } from "react";

function Header({ onSearch, onSort, onFilter }) {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleSortChange = (e) => {
        const sort = e.target.value;
        setSelectedSort(sort);
        onSort(sort); // Call the onFilter callback function to pass the selected filter to the parent component
      };
      
    const handleFilterChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    onFilter(filter); // Call the onFilter callback function to pass the selected filter to the parent component
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
    const handleSearchClick = () => {
    onSearch(searchQuery);
    
     // Call the callback function to pass the search query to the parent component
    };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "orange" }}>
  <div class="container-fluid">
    <a class="navbar-brand text-white mx-4">USER MANAGMENT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
       
      </ul>
      <form class="d-flex">
        <select class="form-select me-2" aria-label="Filter" onChange={handleFilterChange}
          value={selectedFilter}>

          <option value="" >Select Filter</option>
          <option value="equal_5">5 Cirtificates</option>
          <option value="below_5">below 5 Cirtificates</option>
          <option value="equal_4">4 Cirtificates</option>
          <option value="equal_3">3 Cirtificates</option>
          <option value="equal_2">2 Cirtificates</option>
          <option value="equal_1">1 Cirtificates</option>
          
        </select>

        <select class="form-select me-2" aria-label="Filter" onChange={handleSortChange}
          value={selectedFilter}>

          <option value="" >Sort</option>
          <option value="name">Sort By Name</option>
          <option value="email">Sort By Email</option>

        </select>
        <input class="form-control me-2" aria-label="Search" type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearchChange}/>
        <button class="btn btn-outline-success" type="submit" onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}


export default Header;
