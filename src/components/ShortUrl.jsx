import axios from 'axios'
import { Select, MenuItem, Button, TextField, Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'


const ShortUrl = ({ readyUrl, setShortenQrUrl }) => {

  const [snackBar, setSnackBar] = useState(false)
  const [select, setSelect] = useState("clck")
  const [shortenUrl, setShortenUrl] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (readyUrl !== "") {
      if (select === "clck") {
        setLoading(true)
        axios.get(`https://clck.ru/--?url=${readyUrl}`)
        .then(res => {
          setShortenUrl(res?.data)
          setShortenQrUrl(res?.data)
        })
      }
      if (select === "isgd") {
        setLoading(true)
        axios.get(`https://is.gd/create.php?format=json&url=${readyUrl}`)
        .then(res => {
          setShortenUrl(res?.data?.shorturl)
          setShortenQrUrl(res?.data?.shorturl)
        })
      }
      if (select === "shrtco") {
        setLoading(true)
        axios.get(`https://api.shrtco.de/v2/shorten?url=${readyUrl}`)
          .then(res => {
              setShortenUrl(res?.data?.result?.full_short_link)
              setShortenQrUrl(res?.data?.result?.full_short_link)
          })
      }
    }
    setLoading(false)

  }, [readyUrl, select])

  return (
    <div className="short__url">
      <h2 className="url__title">Сокращённая ссылка</h2>
      <div className="url__wrapper">
        <Snackbar open={snackBar} autoHideDuration={6000} onClose={() => setSnackBar(false)}>
          <Alert onClose={() => setSnackBar(false)} severity="success" sx={{ width: '100%' }}>
            Сокращенная ссылка скопировано в буфер обмена!
          </Alert>
        </Snackbar>
        <div className="short__url__select">
          <Select
            sx={{ marginRight: "5px", fontWeight: "300", width: "120px", height: "40px"}}
            size="small"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <MenuItem value={"clck"}>Clck.ru</MenuItem>
            <MenuItem value={"isgd"}>Is.gd</MenuItem>
            <MenuItem value={"shrtco"}>Shrtco.de</MenuItem>
          </Select>
          <TextField
            fullWidth
            placeholder="Здесь появится сокращённая ссылка..."
            size="small"
            inputProps={
              { readOnly: true, style: { fontWeight: "300" } }
            }
            sx={{margin: "0 5px 0 0"}}
            variant="outlined"
            value={shortenUrl !== "" ? shortenUrl : ""} />
        </div>
        <Button
          sx={{ margin: "10px 0 10px 0", width: "150px", height: "40px" }}
          disabled={shortenUrl !== "" ? false : true}
          variant="contained"
          onClick={() => {
            setSnackBar(true)
            navigator.clipboard.writeText(shortenUrl)
          }}
        >Копировать
        </Button>
      </div>
    </div>
  )
}

export default ShortUrl