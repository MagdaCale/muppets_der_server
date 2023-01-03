import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'

import { getAllArtikel, addArtikel } from './controller/artikelController.js'

const PORT = 9090
const app = express()

const upload = multer({dest: './public'})
app.use(morgan('dev'))
app.use('/public', express.static('public'))

app.use(cors())


app.get('/api/blog', getAllArtikel)
app.post('/api/blog', upload.single('bild_url'), addArtikel)


app.listen(PORT, () => console.log('Server runs on Port:', PORT))