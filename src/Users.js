import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Button, Space } from 'antd';
import { Dropdown } from 'bootstrap/dist/js/bootstrap.bundle';

import { Table } from "antd";

const Users = () => {
  const [records, setRecords] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    name: '',
    email: '',
    mobileno: ''
  });

  const path = useLocation();
  console.log('pathname is', path.pathname);

  useEffect(() => {
    fetch("http://localhost/gxp_Partners/showallrecords")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRecords(data);
        setFilteredItems(data); // Initialize with full data
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [path.pathname === '/users']);

  const handleSearch = () => {
    const filtered = records.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
      item.email.toLowerCase().includes(searchTerm.email.toLowerCase()) &&
      item.mobileno.toLowerCase().includes(searchTerm.mobileno.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleChange = (key, value) => {
    setSearchTerm(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-4">
      <h2>All Records</h2>
      <Space direction="horizontal" size="middle" style={{ display: "flex", marginBottom: "1rem" }}>
        <Input
          placeholder="Search by name"
          value={searchTerm.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <Input
          placeholder="Search by email"
          value={searchTerm.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <Input
          placeholder="Search by mobile no"
          value={searchTerm.mobileno}
          onChange={(e) => handleChange('mobileno', e.target.value)}
        />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space>

      {filteredItems.length === 0 && <li>No Record Found</li>}
    
      <table className="table table-bordered" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile no</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.mobileno}</td>
              <td>{record.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

