/* eslint-disable camelcase */
interface Pagination {
  current_page: number
  first_page_url: string | null
  from: number
  last_page: number
  last_page_url: string | null
  next_page_url: string | null
  path: string | null
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

/* eslint-enable camelcase */

// eslint-disable-next-line no-undef
export default Pagination
