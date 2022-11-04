import joi from 'joi';

export const signUpSchema = joi.object({
    name: joi.string().trim().required().min(8),
    e_mail: joi.string().email().required().min(8),
    phone: joi.string().trim().required().min(11),
    token: joi.string().trim().required().max(5),
    password: joi.string().trim().required().min(8),
    confirmPassword: joi.any().equal(joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
});

export const signInSchema = joi.object({
    e_mail: joi.string().email().required(),
    password: joi.string().trim().required(),

});
