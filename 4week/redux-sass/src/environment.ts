const dev = {
  context: 'http://localhost:3000/'
}

const PROD = {
  context: 'http://ec2-18-222-201-77.us-east-2.compute.amazonaws.com:8080/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
