const fallbackLocale = 'en-EN'

declare global {
  interface Window {
    test?: boolean
  }
}

export default class AppLocaleService {
  static getAppLocale() {
    if ((window as Window).test) {
      return fallbackLocale
    }
    return (
      window.navigator?.language ||
      document.querySelector('html')!.getAttribute('lang') ||
      fallbackLocale
    )
  }
}
