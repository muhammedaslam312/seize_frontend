import React, { useEffect, useState } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { getAllUsers } from '../../user_axios/UserAxios';
import CustomPagination from './CustomPagination';
import Header from './Header';

function Home() {

    const [users,setUsers]= useState([])

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const [length, setLength] = useState(1);

    const totalPages = Math.ceil(length / pageSize);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
      };

    const handleFilter = (filter) => {
        setSelectedFilter(filter);
        console.log(filter)
      };
    
    const handleSort = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
    };

    useEffect(()=>{

        const queryParams = {
            page: page,
            limit: pageSize,
            search_query: searchQuery,
            order_by: selectedSort,
            filter_query: selectedFilter,


            // Add any other parameters as needed
          };

        getAllUsers(queryParams).then((users)=>{
            setUsers(users.data)
            console.log(users)
            setLength(users.count)
        })
    },[page,pageSize,searchQuery,selectedSort,selectedFilter])


    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'local_address', headerName: 'Local Address', flex: 1 },
        { field: 'number_of_certification', headerName: 'Number of Certifications', flex: 1 },
        {
          field: 'list_cirtificates',
          headerName: 'Certificates',
          flex: 1,
          renderCell: (params) => {
            // Display certificates as a comma-separated string
            const certificates = params.value.map((cert) => cert.certificate_name).join(', ');
            return <div>{certificates}</div>;
          },
        },
      ];

     
  return (
    <div >
        <Header onSearch={handleSearch} onFilter={handleFilter} onSort={handleSort}/>
        <div style={{ height: 600, width: '100%', padding: "20px" }}>
            <div>
            <DataGrid
                rows={users}
                columns={columns}
                // pageSize={pageSize}
                // page={page}
                // onPageChange={handlePageChange} // Provide a function to handle page changes
                // pagination
                // pagination={false} // Disable the built-in pagination controls
                hideFooter={true} // Hide the footer
            />
            </div>
            <div className='my-1'>
            <CustomPagination page={page} setPage={setPage} totalPages={totalPages} />
            </div>
        </div>
        
    </div>
  )
}

export default Home