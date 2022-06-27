import { useState, useEffect } from 'react'
import InputUrl from './InputUrl'
import Parameters from './Parameters'
import TrafficRadios from './TrafficRadios'


const Main = ({ setReadyUrl }) => {
  
  const [proto, setProto] = useState("http://")
  const [url, setUrl] = useState("")
  const [radio, setRadio] = useState("Свои значения")

  const [utmSource, setUtmSource] = useState("")
  const [utmMedium, setUtmMedium] = useState("")
  const [utmCampaign, setUtmCampaign] = useState("")
  const [utmContent, setUtmContent] = useState("")
  const [utmTerm, setUtmTerm] = useState("")

  useEffect(() => {
    if(url !== "" && url.includes(".") && utmSource !== "" && utmMedium !== "" && utmCampaign !== "" ){
      let resultArr = [
        proto,
        url.includes(" ") ? url.replaceAll(" ", "") : url,
        "/?",
        utmSource ? "utm_source=" : "", utmSource,
        utmMedium ? "&utm_medium=" : "", utmMedium,
        utmCampaign ? "&utmCampaign=" : "", utmCampaign,
        utmContent ? "&utmContent=" : "", utmContent,
        utmTerm ? "&utmTerm=" : "", utmTerm,
      ]
      let withoutSpaces = resultArr.map(el => !el.endsWith(" ") ? el.replace(" ", "+") : el).reduce((prev, current) => prev + current)
  
      setReadyUrl(withoutSpaces)
    }
  }, [proto, url, radio, utmSource, utmMedium, utmCampaign, utmContent, utmTerm])
  
  return (
    <div className="main">
      <div className="main__container">
        <InputUrl proto={{proto, setProto}} url={{url, setUrl}} />
        <TrafficRadios radio={{radio, setRadio}} />
        <Parameters radio={radio} 
          source={{utmSource, setUtmSource}} 
          medium={{utmMedium, setUtmMedium}} 
          campaign={{utmCampaign, setUtmCampaign}}
          content={{utmContent, setUtmContent}}
          term={{utmTerm, setUtmTerm}} />
      </div>
    </div>
  )
}

export default Main