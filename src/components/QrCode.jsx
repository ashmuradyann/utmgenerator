import { useState, useEffect } from 'react'
import { Button } from '@mui/material'


const QrCode = ({ readyUrl, shortenQrUrl }) => {

    const [qrImg, setQrImg] = useState("")
    const [shortenQrImg, setShortenQrImg] = useState("")
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            if (readyUrl !== "") {
                setQrImg(`http://api.qrserver.com/v1/create-qr-code/?data=${readyUrl}&size=200x200`)
                setLoading(false)
            }
            
            if (shortenQrUrl !== "") {
                setShortenQrImg(`http://api.qrserver.com/v1/create-qr-code/?data=${shortenQrUrl}&size=200x200`)
                setLoading(false)
            }
        })
    }, [readyUrl, shortenQrUrl])

    return (
        <div className="qr__code">
            <h2 className="qr__title">QR-код вашей ссылки</h2>
            <div className="qr__wrapper">
                <Button
                    sx={{ margin: "0 15px 0 0", width: "150px", height: "40px" }}
                    disabled={readyUrl !== "" ? false : true}
                    variant="contained"
                    onClick={() => setShow(true)}
                    >Сгенерировать
                </Button>
                {qrImg !== "" && show
                    ? loading ? "Loading..."
                    : <div className="qr__img__wrapper">
                        <h3>QR-код ссылки</h3>
                        <img className="qr__img" src={qrImg} alt="qr_code" />
                    </div> 
                    : ""}
                {shortenQrImg !== "" && show
                    ? loading ? "Loading..."
                    : <div className="qr__img__wrapper">
                        <h3>QR-код сокращённой ссылки</h3>
                        <img className="qr__img" src={shortenQrImg} alt="shorten_qr_code" />
                    </div> 
                    : ""}
            </div>
        </div>
    )
}

export default QrCode