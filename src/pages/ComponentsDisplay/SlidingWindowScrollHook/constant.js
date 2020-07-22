export const MY_ENDLESS_LIST = Array(1000)
  .fill(true)
  .map((_, i) => ({ key: i, value: i }))
