import { Plugin, Context } from '@nuxt/types'

interface JivoApiResult {
  result: string
}

export interface JivoApi {
  setCustomData: (params: Array<object>) => void
  setContactInfo: (param: {
    name?: string,
    email?: string,
    phone?: string,
    description?: string,
  }) => void
  setUserToken: (token: string) => void
  open: (params: string) => void
  close: () => JivoApiResult
}

declare global {
  interface Window {
    // eslint-disable-next-line camelcase
    jivo_api: JivoApi
    // eslint-disable-next-line camelcase
    jivo_onChangeState: (state: 'chat' | 'call' | 'chat/call' | 'label' | 'chat/min') => void;
    // eslint-disable-next-line camelcase
    jivo_onLoadCallback: () => void;
  }
}

const jivoChat: Plugin = (context: Context) => {
  const setUserDataToJivo = () => {
    const fullProfile = context.store.getters['customer/fullProfile']
    if (fullProfile.uuid) {
      window.jivo_api.setContactInfo({
        name: fullProfile.name,
        email: fullProfile.email,
        phone: fullProfile.phone
        // description: fullProfile.uuid
      })
      window.jivo_api.setCustomData([
        {
          title: 'UUID',
          content: fullProfile.uuid,
          link: `https://crm.uberem.com.ua/#/contacts/${fullProfile.uuid}`
        }
      ])
      window.jivo_api.setUserToken(fullProfile.uuid)
    }
  }

  window.jivo_onLoadCallback = () => {
    setUserDataToJivo()
  }

  window.jivo_onChangeState = (state: string) => {
    if (state === 'chat') {
      setUserDataToJivo()
    }
  }
}

export default jivoChat
