import { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import TableInfo from './TableInfo'


const UsageInfo = () => {

  const [value, setValue] = useState("1")

  const googleInfo = [
    ["{adgroupid}", "Идентификатор группы объявлений. Используйте его, если вы настроили данные отслеживания на уровне аккаунта или кампании и хотите узнать, объявление из какой группы было показано"],
    ["{adposition}", "Позиция объявления на странице. Например, значение 1t2 расшифровывается так: страница 1, показ над результатами поиска (top), позиция 2"],
    ["{campaignid}", "Идентификатор кампании. Используйте его, если вы настроили данные отслеживания на уровне аккаунта и хотите узнать, объявление из какой кампании было показано"],
    ["{creative}", "Уникальный идентификатор объявления"],
    ["{device}", "Тип устройства, с которого поступил клик"],
    ["{feeditemid}", "Идентификатор расширения, на которое нажал пользователь"],
    ["{keyword}", "Ключевое слово, по которому было показано объявление в поисковой сети, или наиболее близкое ключевое слово при показе в контекстно-медийной сети"],
    ["{loc_interest_ms}", "Идентификатор местоположения, указанного в поисковом запросе пользователя"],
    ["{loc_physical_ms}", "Идентификатор географического местоположения, откуда был получен клик"],
    ["{lpurl}", `Конечный URL. Шифруется, если только вы не указали {lpurl} в начале шаблона отслеживания. Если параметр {lpurl} указан не в самом начале шаблона отслеживания, пробел и символы ?, =, ${'", #, \t,'} ' и (пробел) заменяются escape-кодами`],
    ["{matchtype}", "Тип соответствия ключевого слова, по которому было показано объявление"],
    ["{merchant_id}", "Идентификатор аккаунта Google Merchant Center, к которому относится товарное объявление."],
    ["{placement}", "Сайт, где объявление получило клик. Он соответствует заданным вами ключевым словам или условиям таргетинга на места размещения (в зависимости от настроек таргетинга в кампании)"],
    ["{product_channel}", "Тип канала продаж, через который реализуется товар, рекламируемый в объявлении"],
    ["{product_country}", "Страна, в которой продается товар, рекламируемый в объявлении"],
    ["{product_id}", "Идентификатор товара, рекламируемого в объявлении (из фида данных Merchant Center)"],
    ["{product_language}", "Язык, на котором приведена информация о товаре (согласно фиду данных Merchant Center)"],
    ["{product_partition_id}", "Уникальный идентификатор группы товаров, к которой относится объявление"],
    ["{store_code}", "Для кампаний, использующих локальный канал продаж, здесь отображается уникальный код магазина"],
    ["{targetid}", "Идентификатор ключевого слова (kwd), динамического поискового объявления (dsa) или цели списка ремаркетинга (aud). Например, если вы добавите в группу объявлений список ремаркетинга с идентификатором критерия 456 и настроите таргетинг на ключевое слово с идентификатором 123, параметр {targetid} будет заменен на kwd-123:aud-456"]
  ]

  const yandexInfo = [
    ["{ad_id}, {banner_id}", "Идентификатор объявления"],
    ["{addphrases}", "Инициирован ли этот показ дополнительными релевантными фразами", ["yes — показ по дополнительной релевантной фразе", "no — показ по одной из исходных фраз"]],
    ["{addphrasestext}", "Текст дополнительной релевантной фразы", ["текст фразы — при показе по дополнительной релевантной фразе", "none — показ не был инициирован дополнительной релевантной фразой"]],
    ["{campaign_type}", "Тип кампании", ["type1 — текстово-графические объявления", "type2 — реклама мобильных приложений", "type3 — динамические объявления", "type4 — смарт-баннеры"]],
    ["{campaign_id}", "Идентификатор рекламной кампании"],
    ["{creative_id}", "Идентификатор креатива из конструктора"],
    ["{device_type}", "Тип устройства, на котором произведен показ", ["desktop", "mobile", "tablet"]],
    ["{gbid}", "Идентификатор группы"],
    ["{keyword}", "Ключевая фраза, по которой было показано объявление (текстово-графическое или реклама мобильных приложений) (без минус-слов)"],
    ["{phrase_id}", "Идентификатор ключевой фразы для текстово-графических объявлений или рекламы мобильных приложений"],
    ["{retargeting_id}", "Идентификатор условия нацеливания на аудиторию, связывающего группу объявлений с условиями подбора аудитории или интересами к мобильным приложениям"],
    ["{coef_goal_context_id}", "Идентификатор корректировки ставок для условия подбора аудитории"],
    ["{interest_id}", "Идентификатор интереса к мобильным приложениям"],
    ["{adtarget_name}", "Условие нацеливания динамического объявления"],
    ["{adtarget_id}", "Идентификатор условия нацеливания динамического объявления"],
    ["{position}", "Точная позиция объявления в блоке. Передает только номер позиции, по которому невозможно определить тип блока, где показано объявление (используйте вместе с {position_type})", ["номер позиции в блоке (например, 1)", "0 — объявление было показано в сетях (РСЯ или внешние сети)"]],
    ["{position_type}", "Тип блока, если показ произошел на странице с результатами поиска Яндекса", ["premium — спецразмещение", "other — блок справа или блок внизу", "none — объявление было показано в сетях (РСЯ или внешние сети)"]],
    ["{source}", "Место показа", ["домен площадки (например, tilda.cc) — при показе в сетях (РСЯ или внешние сети)", "none — при показе в поиске Яндекса"]],
    ["{source_type}", "Тип площадки, на которой произведен показ объявления", ["search — поиск", "context — сети"]],
    ["{region_name}", "Регион, в котором было показано объявление"],
    ["{region_id}", "Идентификатор региона, в котором было показано объявление"]
  ]

  const targetMyInfo = [
    ["{{advertiser_id}}", "id рекламодателя"],
    ["{{campaign_id}}", "id рекламной кампании"],
    ["{{campaign_name}}", "название рекламной кампании"],
    ["{{banner_id}}", "id баннера"],
    ["{{geo}}", "id региона по геодереву myTarget, из которого был сделан переход"],
    ["{{gender}}", "пол пользователя, который сделал переход"],
    ["{{age}}", "возраст пользователя, который сделал переход"],
    ["{{random}}", "случайное число. Часто используется в ссылках (аудит-пикселях) для более точного подсчета показов"],
    ["{{impression_weekday}}", "передает день недели (например, mon), в который произошел показ баннера. Используется в метке ссылки"],
    ["{{impression_hour}}", "передает час (например, 23), в который произошел показ по Московскому времени в 24-часовом формате"],
    ["{{user_timezone}}", "передает временную зону пользователя (например, +3), в котором был сделан показ"]
  ]

  return (
    <div className="usage__wrapper">
        <h2>Динамические переменные, и как их использовать</h2>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" onChange={(e, newValue) => setValue(newValue)}>
                <Tab label="Что это такое?" value="1" />
                <Tab label="Google Adwords" value="2" />
                <Tab label="Яндекс.Директ" value="3" />
                <Tab label="Target My.com" value="4" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <p style={{marginTop: "10px"}}>Динамические переменные позволяют подставлять в контекстную рекламу дополнительную информацию, чтобы узнать, например, с какого устройства поступил клик — с мобильного или с компьютера.</p>
              <p style={{marginTop: "10px"}}>Они называются динамическими, потому что могут менять свое значение. Например, если использовать метку utm_term={'{keyword}'}, то Яндекс Директ автоматически заменит {'{keyword}'} на ключевую фразу, по которой произошел показ.</p>
              <p style={{marginTop: "10px"}}>Чаще всего динамические переменные используются в параметре utm_content, но можно задать динамические переменные и для других меток.</p>
            </TabPanel>
            <TabPanel sx={{padding: "10px 0"}} value="2">
              <h2>Основные параметры динамической вставки: Google Adwords.</h2>
              <small><a style={{color: "#2c72b7"}} href="https://developers.google.com/adwords/api/docs/guides/valuetrack-mapping?hl=ru" target="_blank" rel="noreferrer">Подробнее</a></small>
              <div style={{marginTop: "15px"}}>
                <TableInfo arr={googleInfo} />
              </div>
            </TabPanel>
            <TabPanel sx={{padding: "10px 0"}} value="3">
              <h2>Основные параметры динамической вставки: Яндекс.Директ.</h2>
              <small><a style={{color: "#2c72b7"}} href="https://yandex.ru/support/direct/statistics/url-tags.html" target="_blank" rel="noreferrer">Подробнее</a></small>
              <div style={{marginTop: "15px"}}>
                <TableInfo arr={yandexInfo} />
              </div>
            </TabPanel>
            <TabPanel sx={{padding: "10px 0"}} value="4">
              <h2>Основные параметры динамической вставки: Target My.com.</h2>
              <small><a style={{color: "#2c72b7"}} href="https://target.my.com/help/advertisers/gettingstarted/ru#utm" target="_blank" rel="noreferrer">Подробнее</a></small>
              <div style={{marginTop: "15px"}}>
                <TableInfo arr={targetMyInfo} />
              </div>
            </TabPanel>
          </TabContext>
        </Box>
    </div>
  )
}

export default UsageInfo