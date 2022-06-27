import { useState, memo } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'

import TableInfo from './TableInfo'

import { googleInfo, yandexInfo, targetMyInfo } from './infoData'


const UsageInfo = () => {

  const [value, setValue] = useState("1")

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
                <TableInfo arr={googleInfo} />
            </TabPanel>
            <TabPanel sx={{padding: "10px 0"}} value="3">
              <h2>Основные параметры динамической вставки: Яндекс.Директ.</h2>
              <small><a style={{color: "#2c72b7"}} href="https://yandex.ru/support/direct/statistics/url-tags.html" target="_blank" rel="noreferrer">Подробнее</a></small>
                <TableInfo arr={yandexInfo} />
            </TabPanel>
            <TabPanel sx={{padding: "10px 0"}} value="4">
              <h2>Основные параметры динамической вставки: Target My.com.</h2>
              <small><a style={{color: "#2c72b7"}} href="https://target.my.com/help/advertisers/gettingstarted/ru#utm" target="_blank" rel="noreferrer">Подробнее</a></small>
                <TableInfo arr={targetMyInfo} />
            </TabPanel>
          </TabContext>
        </Box>
    </div>
  )
}

export default memo(UsageInfo)