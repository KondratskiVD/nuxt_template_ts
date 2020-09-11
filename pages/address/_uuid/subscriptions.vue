<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <div
      class="block sm:hidden bg-gray-dark px-4 py-4 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="text-lg leading-5 text-white">
        {{ $t('cleaning.types.subscriptions') }}
      </div>
    </div>
    <ul>
      <li class="border-t border-gray-200">
        <a
          class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <div class="text-sm leading-5 font-medium text-red-dark truncate">
                <div class="flex">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </span>
                </div>
              </div>
              <div class="ml-2 flex-shrink-0 flex">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    Заказан
                  </span>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  Базовая
                </div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Ольга Петровна
                </div>
              </div>
              <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 opacity-25"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <nav class="bg-gray-dark px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="hidden sm:block">
        <p class="text-sm leading-5 text-white">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">20</span>
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <nav class="relative z-0 inline-flex shadow-sm">
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CleaningsBase'
}
</script>

<style scoped>

</style>
