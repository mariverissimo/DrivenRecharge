import Joi from "joi";

export const rechargeSchema = Joi.object({
  phone_id: Joi.number().integer().required(),
  amount: Joi.number().min(10).max(1000).required()
});
