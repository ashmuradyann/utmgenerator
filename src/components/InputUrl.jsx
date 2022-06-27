import { Select, MenuItem, TextField } from '@mui/material'


const InputUrl = ({ proto, url }) => {

    return (
        <>
            <h2>Адрес вашей страницы</h2>
            <div className="input__wrapper">
                <Select
                    value={proto.proto}
                    size="small"
                    onChange={(e) => proto.setProto(e.target.value)}
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{marginRight: "5px"}}>
                        <MenuItem value={"http://"}>http://</MenuItem>
                        <MenuItem value={"https://"}>https://</MenuItem>
                </Select>
                <TextField
                    fullWidth
                    placeholder="www.thisismywebsite.ru"
                    size="small"
                    variant="outlined"
                    value={url.url.endsWith(" ") ? url.url.replace(" ", "") : url.url} 
                    onChange={(e) => url.setUrl(e.target.value)} />
            </div>
        </>
    )
}

export default InputUrl