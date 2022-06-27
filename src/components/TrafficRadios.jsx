import { RadioGroup, FormControlLabel, Radio } from '@mui/material'


const TrafficRadios = ({ radio }) => {

    const radios = ["Свои значения", "Google Adwords", "Youtube", "Яндекс.Директ", "Facebook", "Instagram", "TikTok", "Вконтакте", "Target My"]

    return (
      <>
        <h4 className="radio__subtitle">Источник трафика</h4>
        <div className="radio__wrapper">
          <RadioGroup
              row
              onChange={(e) => {radio.setRadio(e.target.value)}}
              >
            {radios.map((el, i) => (
              <FormControlLabel key={i} value={el} control={<Radio checked={radio.radio === el} />} label={el} />
            ))}
          </RadioGroup>
        </div>
      </>
    )
}

export default TrafficRadios