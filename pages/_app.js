// 使用next-i18next添加多语言支持
import { appWithTranslation } from 'next-i18next'
import { GoogleAnalytics } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp) 