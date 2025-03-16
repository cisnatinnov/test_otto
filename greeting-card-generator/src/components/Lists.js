import { faEraser, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Lists = ({ data, columns, onEdit, onDelete }) => {
  if (!data || data.length === 0) {
    return <div className="shadow-md rounded text-center">No data available</div>;
  }

  const editData = (o) => {
    onEdit(o)
  }

  const deleteData = (o) => {
    onDelete(o)
  }

  return (
    <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className={column.class ?
                `px-6 py-3 text-xs font-medium tracking-wider ${column.class} text-gray-500` :
                `px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500`}
            >`
              {column.header}
            </th>
          ))}
            <th
              className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500"
            >
              #
            </th>
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
                className={column.class ? `px-6 py-4 whitespace-nowrap ${column.class}` : "px-6 py-4 whitespace-nowrap"}
              >
                {row[column.accessor]}
              </td>
            ))}
            <td className='text-center'>
              <button
                className='text-yellow-500'
                onClick={editData(row)}
              >
                <FontAwesomeIcon icon={faPencil}/>
              </button>
                &nbsp;|&nbsp;
              <button
                className="text-red-500"
                onClick={deleteData(row)}
              >
                <FontAwesomeIcon icon={faEraser}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Lists;