import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'


const TableInfo = ({ arr }) => {
  return (
    <div style={{marginTop: "15px", width: "100%"}}>
        <Table aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell><p className="strong__text">Параметр</p></TableCell>
                    <TableCell><p className="strong__text">Что подставится вместо {'{параметра}'}</p></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {arr.map(([key, value, arr], i) => (
                <TableRow>
                    <TableCell component="th" scope="row"><p className="strong__text">{key}</p></TableCell>
                    <TableCell>
                        {value}
                        {arr ? arr.map(li => <ul style={{marginLeft: "35px"}}><li>{li}</li></ul>) : ""}
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default TableInfo