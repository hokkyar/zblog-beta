import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../utils/blogs'
import JoditEditor from 'jodit-react'
import { BiCategory } from 'react-icons/bi'
import { MdTextFields } from 'react-icons/md'
import { categories } from '../utils/categories'

const ActionEdit = () => {
  const editor = useRef(null)
  const { id } = useParams()
  const blog = blogs.filter(b => b.blog_id === id)
  const [content, setContent] = useState(blog[0].blog)
  const [title, setTitle] = useState(blog[0].title)
  const [kategori, setKategori] = useState(blog[0].kategori)

  const category = categories.slice(1)

  return (
    <div className='my-3 container'>
      <h2 className="text-center my-3">Posting Blog Baru</h2>
      <div className="input-group mb-2 action-blog">
        <span className="input-group-text"><MdTextFields /></span>
        <input type="text" className="form-control" placeholder="Judul Blog" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text"><BiCategory /></span>
        <select className="form-select" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {
            category.map((c, i) => (
              <option key={i} value={c.value}>{c.text}</option>
            ))
          }
        </select>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
        onChange={newContent => { }}
      />
      <button className="btn btn-warning my-3">Edit Postingan</button>
    </div>
  )
}

export default ActionEdit