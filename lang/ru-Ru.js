// https://nuxt-community.github.io/nuxt-i18n/lazy-load-translations.html

export default {
  auth: {
    login: 'Номер телефона',
    password: 'Пароль',
    newPassword: 'Новый пароль',
    loginNewPassword: 'Пожалуйста войдите в систему с новым паролем',
    loginPage: 'Мой кабинет',
    forgotLink: 'забыли пароль?',
    loginLink: 'или на страницу входа?',
    loginButton: 'Войти',
    forgotPasswordPage: 'Сброс пароля',
    forgotButton: 'Отправить код для смены пароля?',
    key: 'Код',
    resetPasswordPage: 'Сброс пароля',
    resetButton: 'Сбросить пароль',
    resetText: 'Мы отправили вам смс с кодом для сброса пароля'
  },
  pagination: {
    fromTo: '<span class="font-medium">{from}</span>-<span class="font-medium">{to}</span> из <span class="font-medium">{total}</span>'
  },
  customer: {
    addresses: 'Адреса'
  },
  cleaning: {
    text: {
      currency: 'грн.',
      hours: 'ч.',
      need_hoover: 'Нужен пылесос',
      sub_additional_services: 'Кол-во доп сервисов',
      sub_basic: 'Кол-во базовых уборок',
      sub_maintain: 'Кол-во поддерживающих уборок',
      records_not_found: 'Записей не найдено',
      cleaner_not_assigned: 'Клинер не назначен',
      foreman_not_assigned: 'Бригадир не назначен',
      time_approved: 'Время подтверждено',
      time_not_approved: 'Время не подтверждено'
    },
    types: {
      base: 'Единоразовые уборки',
      subscriptions: 'По подписке',
      subscriptionPayments: 'Оплаты подписок',
      complex: 'Генеральные уборки',
      dryCleaning: 'Химчистки'
    },
    order_statuses: {
      ordered: 'Заказан',
      done: 'Выполнен',
      declined: 'Отменен'
    },
    order_base_types: {
      basic: 'Базовая',
      maintain: 'Поддерживающая',
      office: 'Офис',
      per_hour: 'Почасово',
      windows: 'Окна',
      remake: 'Переуборка'
    },
    order_complex_types: {
      spring_cleaning: 'Генеральная',
      after_repair: 'После ремонта',
      dry_cleaning: 'Химчистка',
      after_the_fire: 'После пожара',
      windows: 'Окна',
      sewerage: 'Канализация',
      office_b2b: 'Офис',
      remake: 'Переуборка'
    },
    payment_types: {
      cash: 'Наличные',
      account: 'р/с',
      cancel: 'Отмена',
      foul: 'Нарушение'
    }
  },
  errors: {
    request_error: 'Ошибка соединения с сервером',
    login_error: 'Ошибка во время входа в кабинет',
    data_not_found: 'Данные не найдены',
    try_refresh: 'Пожалуйста обновить страницу',
    copy_error: 'Ошибка во время копирования'
  },
  success: {
    updated: 'Данные обновлены',
    copied: 'Скопированно'
  },
  adminPortal: {
    general: {
      logout: 'Выход'
    },
    profile: {
      phone: 'Номер телефона',
      name: 'Имя'
    }
  },
  premises: {
    room1: '1-ком',
    room2: '2-ком',
    room3: '3-ком',
    room4: '4-ком',
    home: 'Дом',
    office: 'Офис',
    per_hour: 'Почасово',
    windows: 'Окна'
  }
}
