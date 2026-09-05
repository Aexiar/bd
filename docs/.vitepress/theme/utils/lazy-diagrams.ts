import { createApp, defineAsyncComponent, type App, type Component } from 'vue'

type DiagramModule = { initComponent: (app: App) => void }

function diagram(loader: () => Promise<DiagramModule>, name: string) {
  return defineAsyncComponent(async () => {
    const module = await loader()
    // Use the plugin's public registration API without mounting a second app.
    const registry = createApp({})
    module.initComponent(registry)
    const component = registry.component(name)
    if (!component) throw new Error(`Diagram component not registered: ${name}`)
    return component as Component
  })
}

export function registerLazyDiagrams(app: App) {
  app.component('MarkmapRoot', diagram(() => import('@legend/markmap'), 'MarkmapRoot'))
  app.component('MermaidChart', diagram(() => import('@legend/mermaid'), 'MermaidChart'))
  app.component('InfographicChart', diagram(() => import('@legend/infographic'), 'InfographicChart'))
  const plantuml = diagram(() => import('@legend/plantuml'), 'PlantumlChart')
  app.component('PlantumlChart', plantuml)
  app.component('plantuml-chart', plantuml)
}
