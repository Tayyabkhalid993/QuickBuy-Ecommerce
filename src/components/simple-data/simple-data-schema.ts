import { SchemaTypeDefinition } from 'sanity'

export const schemaTypes: SchemaTypeDefinition[] = [
  {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      }
    ]
  }
]