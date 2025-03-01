const Lists = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className='px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500'
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className='transition-all hover:bg-gray-100 hover:shadow-lg'
          >
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className="px-6 py-4 whitespace-nowrap"
              >
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Lists;