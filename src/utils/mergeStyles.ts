const mergeStyles = <T extends Record<string, string>>(defaultStyles: T, ...extraStylesArray: Array<Partial<Record<keyof T, string>> | undefined>) => {
  const styles: Record<string, string> = {}

  for (const [key, style] of Object.entries(defaultStyles)) {
    styles[key] = style

    extraStylesArray.forEach(extraStyles => {
      if (!extraStyles) return

      if (key in extraStyles) {
        styles[key] += ` ${extraStyles[key]}`
      }
    })
  }

  return styles as T
}

export { mergeStyles }