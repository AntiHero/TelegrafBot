import Joi from 'joi';

export const configValidationSchema = Joi.object({
  ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  TELEGRAM_TOKEN: Joi.string().required(),
});
