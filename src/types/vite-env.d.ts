declare module '*?srcset' {
  const value: {
    fallback: string
    sources: Array<{ srcset: string; type: string }>
  }
  export default value
}
