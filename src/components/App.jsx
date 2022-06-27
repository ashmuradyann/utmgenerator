import { useState } from "react"
import Header from "./Header"
import Main from "./Main"
import UsageInfo from "./UsageInfo"
import Result from "./Result"


function App() {

  const [readyUrl, setReadyUrl] = useState("")

  return (
    <div>
      <Header />
      <Main setReadyUrl={url => setReadyUrl(url)} />
      <Result readyUrl={readyUrl} />
      <UsageInfo />
    </div>
  )
}

export default App
