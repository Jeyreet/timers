declare module '*?srcset' {
  const value: {
    fallback: string
    sources: Array<{ srcset: string; type: `${string}/${string}` }>
  }
  export default value
}

declare module '*.svg' {
  import * as React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}