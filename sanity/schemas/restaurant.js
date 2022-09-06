export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (rule) => rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (rule) => rule.required()
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
      validation: (rule) => rule.required()
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
      validation: (rule) => rule.required()
    },
    {
      name: "long",
      type: "number",
      title: "Longitute of the Restaurant",
      validation: (rule) => rule.required()
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (rule) => rule.required()
    },
    {
      name: "rating",
      type: "string",
      title: "Enter a rating from (1-5) starts",
      validation: (rule) =>
        rule.required()
          .min(1)
          .max(5)
          .error("please enter a blue between (1-5)")
    },
    {
      name: "type",
      title: "Category",
      validation: (rule) => rule.required(),
      type: "reference",
      to: [{ type: 'category' }]
    },
    {
      name: "dishes",
      title: "Dishes",
      validation: (rule) => rule.required(),
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],

}
