import { useState, useEffect, memo } from 'react'
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

  const modifyProto = () => {
    if (url.includes("http://") || url.includes("https://")){
      return ""
    }
    return proto
  }
  
  useEffect(() => {

    const modifyUrl = () => {

      let utms = [
        utmSource ? "utm_source=" : "", utmSource,
        utmMedium ? "&utm_medium=" : "", utmMedium,
        utmCampaign ? "&utm_campaign=" : "", utmCampaign,
        utmContent ? "&utm_content=" : "", utmContent,
        utmTerm ? "&utm_term=" : "", utmTerm
      ]
      
      if (url.includes(" ")) url.replaceAll(" ", "")
  
      let [firstPart, secondPart] = url.split("?")
      
      if (secondPart === undefined) secondPart = ""
      console.log(firstPart, secondPart)

      if (secondPart !== "") {
        firstPart.replace("/", "")
      }
      
      if (firstPart.endsWith("/") || firstPart.includes("#target")) {
        firstPart = firstPart + ""
      }

      if (!firstPart.includes("/")) {
        firstPart = firstPart + "/"
      }
      
      if (secondPart === "") {
        secondPart = "?" + secondPart
      } else {
        secondPart = "?" + secondPart + "&"
      }

      if (firstPart.includes("#target")) {
        utms.push("#target")
        firstPart = firstPart.replace("#target", "") 
      } else if (secondPart.includes("#target")) {
        utms.push("#target")
        secondPart = secondPart.replace("#target", "")
      }
      
      let readyUtms = utms.map(el => el.includes(" ") ? el.replaceAll(" ", "+") : el).reduce((a, b) => a + b)
  
      return firstPart + secondPart + readyUtms
    }

    if(url !== "" && url.includes(".") && utmSource !== "" && utmMedium !== "" && utmCampaign !== "" ){
      
      let result = modifyProto() + modifyUrl()
      console.log(result)
  
      setReadyUrl(result)
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

export default memo(Main)