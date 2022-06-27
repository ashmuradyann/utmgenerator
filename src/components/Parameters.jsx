import { useEffect, useState } from 'react'
import { TextField, Chip } from '@mui/material'


const Parameters = ({ radio, source, medium, campaign, content, term }) => {

  const [campaignMutedText, setCampaignMutedText] = useState("")
  const [contentMutedText, setContentMutedText] = useState("")
  const [termMutedText, setTermMutedText] = useState("")

  useEffect(() => {
    switch (radio) {
      case "Свои значения": 
        source.setUtmSource("")
        medium.setUtmMedium("")
        campaign.setUtmCampaign("")
        content.setUtmContent("")
        term.setUtmTerm("")
        setCampaignMutedText("")
        setContentMutedText("")
        setTermMutedText("")
        break
      case "Google Adwords":
        source.setUtmSource("google")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{network}")
        content.setUtmContent("{creative}")
        term.setUtmTerm("{keyword}")
        setCampaignMutedText("Вместо {network} Google Adwords подставит 'g' (поиск), 's' (поисковый партнер) или 'd' (КМС)")
        setContentMutedText("Вместо {creative} Google Adwords автоматически подставит ID объявления")
        setTermMutedText("Вместо {keyword} Google Adwords автоматически подставит ключевое слово")
        break
      case "Яндекс.Директ":
        source.setUtmSource("yandex")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{campaign_id}")
        content.setUtmContent("{ad_id}")
        term.setUtmTerm("{keyword}")
        setCampaignMutedText("Вместо {campaign_id} Яндекс.Директ автоматически подставит ID кампании")
        setContentMutedText("Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления")
        setTermMutedText("Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово")
        break
      case "Вконтакте":
        source.setUtmSource("vkontakte")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{campaign_id}")
        content.setUtmContent("{ad_id}")
        term.setUtmTerm("")
        setCampaignMutedText("Вместо {campaign_id} Вконтакте автоматически подставит ID объявления")
        setContentMutedText("Вместо {ad_id} Вконтакте автоматически подставит ID объявления")
        setTermMutedText("")
        break
      case "Facebook":
        source.setUtmSource("facebook")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("promo")
        content.setUtmContent("")
        term.setUtmTerm("")
        setCampaignMutedText("")
        setContentMutedText("")
        setTermMutedText("")
        break
      case "Target My":
        source.setUtmSource("mycom")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{{campaign_id}}")
        content.setUtmContent("{{banner_id}}")
        term.setUtmTerm("{{geo}}.{{gender}}.{{age}}")
        setCampaignMutedText("Вместо {{campaign_id}} Target My.com автоматически подставит ID кампании")
        setContentMutedText("Вместо {{banner_id}} Target My.com автоматически подставит ID баннера")
        setTermMutedText("Вместо {{geo}}.{{gender}}.{{age}} Target My.com автоматически подставит ID региона, пол и возраст кликнувшего по рекламе")
        break
      case "TikTok":
        source.setUtmSource("mycom")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{{campaign_id}}")
        content.setUtmContent("")
        term.setUtmTerm("{{geo}}.{{gender}}.{{age}}")
        setCampaignMutedText("Вместо {{campaign_id}} TikTok автоматически подставит ID кампании")
        setContentMutedText("")
        setTermMutedText("Вместо {{geo}}.{{gender}}.{{age}} TikTok автоматически подставит ID региона, пол и возраст кликнувшего по рекламе")
        break
      case "Youtube":
        source.setUtmSource("youtube")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{network}")
        content.setUtmContent("{creative}")
        term.setUtmTerm("{keyword}")
        setCampaignMutedText("Вместо {network} Youtube подставит 'g' (поиск), 's' (поисковый партнер) или 'd' (КМС)")
        setContentMutedText("Вместо {creative} Youtube автоматически подставит ID объявления")
        setTermMutedText("Вместо {keyword} Youtube автоматически подставит ключевое слово")
        break
      case "Instagram":
        source.setUtmSource("instagram")
        medium.setUtmMedium("cpc")
        campaign.setUtmCampaign("{{campaign.id}}")
        content.setUtmContent("{{ad.id}}")
        term.setUtmTerm("{{placement}}")
        setCampaignMutedText("")
        setContentMutedText("")
        setTermMutedText("")
        break
    }
  }, [radio])

  return (
    <>
      <div className="params__wrapper">
        <div className="params__required">
          <h4 className="radio__subtitle">Обязательные параметры</h4>
            <div>
              <span>Источник кампании</span>
              <div className="params__input__wrapper">
                <Chip sx={{border: "1px solid #c4c4c4", borderRadius: "4px", height: "40px", marginRight: "5px", width: "120px"}} label="utm_source" />
                <TextField 
                  fullWidth 
                  placeholder="google, yandex, vk, facebook"
                  size="small"
                  variant="outlined"
                  value={source.utmSource}
                  onChange={(e) => source.setUtmSource(e.target.value)} />
              </div>
            </div>
            <div>
              <span>Тип трафика</span>
              <div className="params__input__wrapper">
                <Chip sx={{border: "1px solid #c4c4c4", borderRadius: "4px", height: "40px", marginRight: "5px", width: "120px"}} label="utm_medium" />
                <TextField 
                  fullWidth
                  placeholder="cpc, email, banner, article"
                  size="small"
                  variant="outlined"
                  value={medium.utmMedium}
                  onChange={(e) => medium.setUtmMedium(e.target.value)} />
              </div>
            </div>
            <div>
              <span>Название кампании</span>
              {campaignMutedText !== "" ? <small>{campaignMutedText}</small> : ""}
              <div className="params__input__wrapper">
                <Chip sx={{border: "1px solid #c4c4c4", borderRadius: "4px", height: "40px", marginRight: "5px", width: "120px"}} label="utm_campaign" />
                <TextField 
                  fullWidth
                  placeholder="promo, discount, sale"
                  size="small"
                  variant="outlined"
                  value={campaign.utmCampaign}
                  onChange={(e) => campaign.setUtmCampaign(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="params__norequired">
            <h4 className="radio__subtitle">Необязательные параметры</h4>
            <div>
              <span>Идентификатор объявления</span>
              {contentMutedText !== "" ? <small>{contentMutedText}</small> : ""}
              <div className="params__input__wrapper">
                <Chip sx={{border: "1px solid #c4c4c4", borderRadius: "4px", height: "40px", marginRight: "5px", width: "120px"}} label="utm_content" />
                <TextField 
                  fullWidth
                  placeholder="link, landing page"
                  size="small"
                  variant="outlined"
                  value={content.utmContent}
                  onChange={(e) => content.setUtmContent(e.target.value)} />
              </div>
            </div>
            <div>
              <span>Ключевое слово</span>
              {termMutedText !== "" ? <small>{termMutedText}</small> : ""}
              <div className="params__input__wrapper">
                <Chip sx={{border: "1px solid #c4c4c4", borderRadius: "4px", height: "40px", marginRight: "5px", width: "120px"}} label="utm_term" />
                <TextField 
                  fullWidth
                  placeholder="free, -30%, registration"
                  size="small"
                  variant="outlined"
                  value={term.utmTerm}
                  onChange={(e) => term.setUtmTerm(e.target.value)} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Parameters