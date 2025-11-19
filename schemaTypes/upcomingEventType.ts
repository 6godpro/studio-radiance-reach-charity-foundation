import {defineType, defineField} from 'sanity'

export const upcomingEventType = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Event Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Event Date',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),

    defineField({
      name: 'banner',
      type: 'image',
      title: 'Event Banner',
      options: {hotspot: true},
    }),
  ],
})
