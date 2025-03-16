import { useEffect, useState } from 'react';
import axios from 'axios';
import Lists from '../../components/Lists';

const VoucherData = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Point', accessor: 'point_value', class: 'text-center' },
    { header: 'Created At', accessor: 'createdAt' },
    { header: 'Updated At', accessor: 'updatedAt' }
  ]

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/vouchers');
        let data = response.data.data
        setData(data); // Set the fetched data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchData();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 className="text-center mb-4">Vouchers</h3>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <Lists data={data} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherData;