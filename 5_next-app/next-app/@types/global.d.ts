declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly NEXT_PULIC_API_BASE_URL: string;
      readonly DATABASE_HOST: string;
      readonly DATABASE_PORT: number;
      readonly DATABASE_NAME: string;
      readonly DATABASE_USER: string;
      readonly DATABASE_PASSWORD: string;

    }
  }