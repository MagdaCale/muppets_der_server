import { readFromFile, writeIntoFile } from "./util/fileStorage.js"

export const getAllArtikel = (_, res) => {
    readFromFile('artikel.json')        
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch( err => {
        console.log(err)
        res.status(500).end()
    })
}

export const addArtikel = (req, res) => {
    const artikel = {
        id: req.body.id,
        titel: req.body.titel,
        bild_url: req.file.path,
        text: req.body.text,
    }
    readFromFile('artikel.json')
    .then(data => JSON.parse(data))
    .then(obj => {
        obj.push(artikel)
        writeIntoFile('artikel.json', JSON.stringify(obj))
    })
    .then( () => res.status(200).end())
    .catch(err => {
        console.log('error', err)
        res.status(500).end()
    })
}

