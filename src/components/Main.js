import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DefaultImg from '../assets/img/default.png'
import { blogs } from '../utils/blogs'
import { RiSearchEyeLine } from 'react-icons/ri'
import { BiCategory } from 'react-icons/bi'
import { categories } from '../utils/categories'

const Main = () => {
  const [search, setSearch] = useState('')
  const [kategori, setKategori] = useState(categories[0].value)

  return (
    <>
      <header>
        <h1 className="text-center p-3 m-3 text-dark">Selamat datang di <span className="text-info">Z</span>Blog!</h1>
        <div className="container">
          <div className="row d-flex flex-wrap gap-2">
            <div className="col">
              <div className="input-group">
                <span className="input-group-text"><BiCategory /></span>
                <select className="form-select" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                  {
                    categories.map((category, i) => (
                      <option key={i} value={category.value}>{category.text}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-2">
                <span className="input-group-text"><RiSearchEyeLine /></span>
                <input type="text" className="form-control" placeholder="Cari judul blog" autoComplete="off" onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container my-4">
          <div className="row">
            <div className="col d-flex gap-3 flex-wrap justify-content-evenly blog-content">
              {
                blogs
                  .filter(blog => {
                    return kategori.toLowerCase() === '' ? blog : blog.kategori.toLowerCase().includes(kategori.toLowerCase())
                  })
                  .filter(blog => {
                    return search.toLowerCase() === '' ? blog : blog.title.toLowerCase().includes(search.toLowerCase())
                  })
                  .map((blog, i) => (
                    <Link key={i} to={`/detail/${blog.blog_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="card rounded-4" style={{ width: '20rem' }}>
                        <figure>
                          <div className="overlay">
                            <div className="overlay-content">
                              <img className="rounded-circle img-thumbnail" src={DefaultImg} alt="profile" width="80" height="80" />
                              <h4 className="text-center mt-3">{blog.name}</h4>
                            </div>
                          </div>
                          <img src="https://picsum.photos/200/300" style={{ maxHeight: '14rem' }} className="card-img-top" alt="default" />
                        </figure>
                        <div className="card-body">
                          <h5 className="card-title judul-blog">{blog.title}</h5>
                          <p className="text-muted">{blog.date}</p>
                          <p className="card-text">{blog.blog}</p>
                          <p className="m-0 text-primary">{blog.kategori}</p>
                        </div>
                      </div>
                    </Link>
                  ))
              }
            </div>
          </div>

          {/* <nav className="my-4">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">Prev</a>
              </li>
              <li className="page-item">
                <a className="page-link active" href="#">1</a>
              </li>
              <li className="page-item" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </main>
    </>
  )
}

export default Main