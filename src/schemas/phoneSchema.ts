import Joi from "joi";

export const phoneSchema = Joi.object({
  number: Joi.string().length(11).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  document: Joi.string().required(),
  carrier_id: Joi.number().required(),
});

// Manual typing
export type PhoneSchemaType = {
  number: string;
  name: string;
  description: string;
  document: string;
  carrier_id: number;
};
