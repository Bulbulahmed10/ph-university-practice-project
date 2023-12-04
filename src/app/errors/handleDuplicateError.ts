import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // the extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    { path: '', message: `${extractedMessage} is already exists` },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'validation error',
    errorSources,
  };
};

export default handleDuplicateError;
