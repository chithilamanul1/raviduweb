import { defineField, defineType } from 'sanity'

export const student = defineType({
  name: 'student',
  title: 'Students',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending (Waiting for Approval)', value: 'pending' },
          { title: 'Active (Has Access)', value: 'active' },
          { title: 'Revoked (No Access)', value: 'revoked' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'receiptImage',
      title: 'Bank Transfer Receipt',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'paymentStatus'
    },
    prepare(selection) {
      const { title, subtitle, status } = selection
      return {
        title: title,
        subtitle: `${subtitle} - Status: ${status?.toUpperCase()}`,
      }
    }
  },
})
