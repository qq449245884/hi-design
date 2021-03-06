export function scopedClassMaker(prefix: string) {
  return function x(name ?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}