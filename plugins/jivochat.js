export default ({ store }) => {
  // eslint-disable-next-line camelcase
  const jivo_onLoadCallback = function () {
    const fullProfile = store.getters['customer/fullProfile']
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

  // eslint-disable-next-line camelcase
  window.jivo_onLoadCallback = jivo_onLoadCallback
}
