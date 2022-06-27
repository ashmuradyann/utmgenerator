import { Select, MenuItem, Button, TextField, Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'


const ShortUrl = ({ readyUrl, setShortenQrUrl }) => {

  const [snackBar, setSnackBar] = useState(false)
  const [select, setSelect] = useState("shrtco")
  const [shortenUrl, setShortenUrl] = useState("")

  useEffect(() => {

    if (readyUrl){
      fetch(`https://api.shrtco.de/v2/shorten?url=${readyUrl}`)
        .then(res => res.json())
        .then(res => {
          if (select === "shrtco"){
            setShortenUrl(res?.result?.full_short_link)
            setShortenQrUrl(res?.result?.full_short_link)
          } else if (select === "9qr") {
            setShortenUrl(res?.result?.full_short_link2)
            setShortenQrUrl(res?.result?.full_short_link2)
          }
        })
    }

  }, [readyUrl, select])

  return (
    <div className="short__url">
      <h2 className="url__title">Сокращённая ссылка</h2>
      <div className="url__wrapper">
        <Button
          sx={{ margin: "10px 5px 10px 0", width: "150px", height: "40px" }}
          disabled={shortenUrl !== "" ? false : true}
          variant="contained"
          onClick={() => {
            setSnackBar(true)
            navigator.clipboard.writeText(shortenUrl)
          }}
        >Копировать
        </Button>
        <Snackbar open={snackBar} autoHideDuration={6000} onClose={() => setSnackBar(false)}>
          <Alert onClose={() => setSnackBar(false)} severity="success" sx={{ width: '100%' }}>
            Сокращенная ссылка скопировано в буфер обмена!
          </Alert>
        </Snackbar>
        <div style={{display: "flex", width: "100%"}}>
          <Select
            sx={{ marginRight: "5px", fontWeight: "300" }}
            size="small"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <MenuItem value={"shrtco"}>Shrtco.de</MenuItem>
            <MenuItem value={"9qr"}>9qr.de</MenuItem>
          </Select>
          <TextField
            fullWidth
            placeholder="Здесь появится сокращённая ссылка..."
            size="small"
            inputProps={
              { readOnly: true, style: { fontWeight: "300" } }
            }
            variant="outlined"
            value={shortenUrl !== "" ? shortenUrl : ""} />
        </div>
      </div>
    </div>
  )
}

export default ShortUrl