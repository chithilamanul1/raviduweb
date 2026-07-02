import { type SchemaTypeDefinition } from 'sanity'
import { videoClass } from './schemas/videoClass'
import { student } from './schemas/student'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [videoClass, student],
}
