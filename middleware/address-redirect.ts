import { Middleware } from '@nuxt/types'

const addressMiddleware: Middleware = function (context) {
  if (context.route.fullPath === context.app.localePath({
    name: 'address-uuid', params: { uuid: context.route.params.uuid }
  })) {
    return context.redirect(context.app.localePath({
      name: 'address-uuid-cleanings-base',
      params: { uuid: context.route.params.uuid }
    }))
  }
}

export default addressMiddleware
