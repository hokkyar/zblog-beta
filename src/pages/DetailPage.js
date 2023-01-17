import React from 'react'
import { blogs } from '../utils/blogs'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { id } = useParams();
  return (
    <>
      {
        blogs.filter(blog => blog.blog_id === id).map((blog, i) => (
          <div className='container my-3 card-detail'>
            <div class="col d-flex justify-content-center detail-blog">
              <div class="card">
                <h3 class="card-title p-3 m-4 text-center fw-bold">{blog.title}</h3>
                <figure>
                  <img src="https://picsum.photos/500/300" style={{ maxHeight: '14rem' }} class="card-img-top" alt="default" />
                </figure>
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p>Diupload oleh: <span className='fw-bold'>{blog.name}</span></p>
                    <p className='text-muted'>{blog.date}</p>
                  </div>
                  <p class="text-primary">Kategori: {blog.kategori}</p>
                  <p style={{ textAlign: 'justify' }}>{blog.blog}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default DetailPage