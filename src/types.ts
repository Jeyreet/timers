export type ExtraStyles<T> = Partial<Record<keyof T, string>>

export type Image = {
  sources: Array<{ srcset: string; type: `${string}/${string}` }>
  fallback: string
}
