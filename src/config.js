const dev = {
  STRIPE_KEY: "pk_test_4dIKdYwNvqFszMskGTxgBEOa009A64Tqjx",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1653or1ki6lz9"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0e7krfcsll.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aZvLBmx8S",
    APP_CLIENT_ID: "7r8c15ug7reel8gasechqdf62p",
    IDENTITY_POOL_ID: "us-east-2:374691ce-752c-4370-af5f-9ce332d7fa79"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_4dIKdYwNvqFszMskGTxgBEOa009A64Tqjx",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1eklhynfb5nq4"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://s8d2j224xd.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aZvLBmx8S",
    APP_CLIENT_ID: "7r8c15ug7reel8gasechqdf62p",
    IDENTITY_POOL_ID: "us-east-2:462d77c8-c776-4dab-beab-aeff67b6aa59"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};