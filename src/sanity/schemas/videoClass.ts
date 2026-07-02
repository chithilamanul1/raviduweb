import { defineField, defineType } from 'sanity'

export const videoClass = defineType({
  name: 'videoClass',
  title: 'Video Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Class Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube Unlisted / Vimeo)',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g., "45 mins")',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order (e.g. 1 for first class)',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
    },
  },
})
