import * as Yup from "yup";

const productSchema = Yup.object({
  name: Yup.string().required().trim().max(55),
  brand: Yup.string().required().trim().max(55),
  price: Yup.number().min(0).required(),
  quantity: Yup.number().min(1).required(),
  category: Yup.string()
    .required()
    .oneOf([
      "grocery",
      "electronics",
      "bakery",
      "clothing",
      "shoes",
      "eletrical",
      "stationary",
      "kitchen",
    ]),
  description: Yup.string().trim().required().min(20).max(1000),
  hasFreeShipping: Yup.boolean().default(false),
});

export default productSchema;