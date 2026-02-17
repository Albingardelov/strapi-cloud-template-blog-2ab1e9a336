module.exports = ({ env }) => ({
  secrets: {
    // Used to encrypt sensitive admin data (e.g. token display). Recommended in Strapi v5+.
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
