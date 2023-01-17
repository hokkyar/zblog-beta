import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { BiCategory } from 'react-icons/bi'
import { MdTextFields } from 'react-icons/md'
import { categories } from '../utils/categories'

const ActionAdd = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const category = categories.slice(1)
  const [kategori, setKategori] = useState(category[0].value)
  
  return (
    <div className='my-3 container'>
      <h2 className="text-center my-3">Posting Blog Baru</h2>
      <div className="input-group mb-2 action-blog">
        <span className="input-group-text"><MdTextFields /></span>
        <input type="text" className="form-control p-2 fs-5" placeholder="Judul Blog" autoComplete="off" />
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
      <button className="btn btn-primary my-3">Posting</button>
    </div>
  )
}

export default ActionAdd