/* eslint-disable camelcase */

interface Profile {
  uuid: string,
  name: string,
  email: string,
  phone: string,
  phone2: string,
  addresses?: Array<Address>,
}
export interface Address {
  uuid: string,
  formatted: string,
  map_link: string,
  is_hoover: boolean,
  premises_type: string,
  created_at: string,
}

// eslint-disable-next-line no-undef
export default Profile
