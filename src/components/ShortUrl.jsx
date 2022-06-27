import { Select, MenuItem, Button, TextField, Snackbar, Alert } from '@mui/material'
import { height } from '@mui/system'
import { useState, useEffect } from 'react'


const ShortUrl = ({ readyUrl, setShortenQrUrl }) => {

  const [snackBar, setSnackBar] = useState(false)
  const [select, setSelect] = useState("shrtco")
  const [shortenUrl, setShortenUrl] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (readyUrl){
      setLoading(true)
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
            <MenuItem value={"shrtco"}>Shrtco.de</MenuItem>
            <MenuItem value={"9qr"}>9qr.de</MenuItem>
          </Select>
          <TextField
            fullWidth
            placeholder={loading ? "Loading..." : "Здесь появится сокращённая ссылка..."}
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