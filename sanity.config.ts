import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schema'

export default defineConfig({
  basePath: '/admin',
  projectId: 'czcl29jz',
  dataset: 'production',
  title: 'Ravindu Web Admin',
  schema,
  plugins: [
    structureTool(),
  ],
})
