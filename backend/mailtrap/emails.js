import { mailtrapClient, sender } from './mailtrap.config.js';
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from './emailTemplates.js';

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: {
                email: sender.email,
                name: sender.name
            },
            to: recipient,
            subject: "Verifique seu e-mail",
            html: VERIFICATION_EMAIL_TEMPLATE(verificationToken), // Chame a função com o parâmetro
            category: "Email Verification"
        });

        console.log("Email enviado com sucesso: ", response);
    } catch (error) {
        console.log("Erro ao enviar e-mail: ", error.message);
        throw new Error(`Erro ao enviar e-mail: ${error.message}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: {
                email: sender.email,
                name: sender.name
            },
            to: recipient,
            subject: "Bem-vindo ao PetPet",
            html: WELCOME_EMAIL_TEMPLATE(name),
            category: "Welcome Email"
        });

        console.log("Email de boas-vindas enviado com sucesso: ", response);
    } catch (error) {
        console.log("Erro ao enviar e-mail de boas-vindas: ", error.message);
        throw new Error(`Erro ao enviar e-mail de boas-vindas: ${error.message}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: {
                email: sender.email,
                name: sender.name
            },
            to: recipient,
            subject: "Redefinir sua senha",
            html: PASSWORD_RESET_REQUEST_TEMPLATE(resetURL),
            category: "Password Reset Email"
        });

        console.log("Email de redefinição de senha enviado com sucesso: ", response);
    } catch (error) {
        console.log("Erro ao enviar e-mail de redefinição de senha: ", error.message);
        throw new Error(`Erro ao enviar e-mail de redefinição de senha: ${error.message}`);
    }
};

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: {
                email: sender.email,
                name: sender.name
            },
            to: recipient,
            subject: "Redefinição de senha bem-sucedida",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE(),
            category: "Password Reset Success Email"
        });

        console.log("Email de redefinição de senha bem-sucedida enviado com sucesso: ", response);
    } catch (error) {
        console.log("Erro ao enviar e-mail de redefinição de senha bem-sucedida: ", error.message);
        throw new Error(`Erro ao enviar e-mail de redefinição de senha bem-sucedida: ${error.message}`);
    }
};