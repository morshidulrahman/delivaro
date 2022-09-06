export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: "type",
      type: "string",
      title: "Category name",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the category",

    },
  ],
}
