import React from 'react';
import { Table } from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { FiMonitor } from 'react-icons/fi'
import './MenuBar.css'

const MenuBar = () => {
  return (
    <div>
      <Table striped bordered hover>
        <tbody className='table-container'>
          <tr>
            <td className='fw-bold'>BROWSE CATEGORIES</td>
          </tr>
          <tr>
            <td><BsPhone/> Phone</td>
          </tr>
          <tr>
            <td><AiOutlineLaptop/> Laptop</td>
          </tr>
          <tr>
            <td><FiMonitor/> Smart Tv</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MenuBar;