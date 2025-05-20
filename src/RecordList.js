import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecordsList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/gxp_Partners/showallrecords')
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the records!", error);
      });
  }, []);

  return (
    <div>
      <h2>All Records</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.name} - {record.email}-{record.mobileno}-{record.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordsList;