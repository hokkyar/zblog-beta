import React from 'react'
import { RiAddCircleLine } from 'react-icons/ri'
import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import { blogs } from '../utils/blogs'
import { Table } from 'antd'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const columns = [
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
      align: 'center',
    },
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Action',
      align: 'center',
      render: (_, { blog_id }) => {
        return (
          <>
            <Link to={`/dashboard/blogs/edit/${blog_id}`} className='edit-btn'><span className="fs-3 mx-1"><AiOutlineEdit /></span></Link>
            <Link to='' className='delete-btn'><span className="fs-3 mx-1"><MdOutlineDelete /></span></Link>
          </>
        )
      }
    },
  ]

  return (
    <div className='container mt-3'>
      <Link to='/dashboard/blogs/add' className="btn btn-primary my-3"><RiAddCircleLine style={{ marginBottom: '2.5px' }} /> Tambah Blog</Link>
      <Table
        columns={columns}
        dataSource={blogs}
      />
    </div>
  )
}

export default Blogs