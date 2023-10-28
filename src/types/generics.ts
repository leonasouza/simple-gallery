export interface Paginated<T> {
  count: number
  next: string //page url
  previous: string //page url
  results: T[]
}
