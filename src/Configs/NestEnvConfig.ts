export const envModelTransformer = (envs: any) => ({
    APP_NAME: envs.APP_NAME,
    PORT: parseInt(envs.PORT, 10) || 3333,
});

export const nestEnvConfiguration = () => envModelTransformer(process.env);
