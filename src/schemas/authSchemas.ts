import joi from 'joi';

export const signUpSchema = joi.object({
    type: joi.string().trim().required(),
    name: joi.string().trim().required(),
    e_mail: joi.string().email().required(),
    phone: joi.string().trim().required(),
    password: joi.string().trim().min(8).required(),
    confirmPassword: joi.any().equal(joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
});

export const signInSchema = joi.object({
    e_mail: joi.string().email().required(),
    password: joi.string().trim().required(),

});
