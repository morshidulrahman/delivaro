export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "dish",
      type: "string",
      title: "Name of dish",
      validation: (rule) => rule.required(),

    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (rule) => rule.required(),

    },
    {
      name: "price",
      type: "number",
      title: "price of the dish G&P",

    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",

    },
  ],

}
