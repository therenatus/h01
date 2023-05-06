export const IsString = (req: any): boolean => {
  if (!req) {
    return false;
  }
  if (typeof req !== "string") {
    return false;
  }
  return true;
};

export const MaxLength = (text: any, maxLength: number) => {
  if (text.length > maxLength) {
    return false;
  }
  return true;
};

export const MinLength = (text: any, minLength: number) => {
  if (text.length < minLength) {
    return false;
  }
  return true;
};

export const validateInt32 = (req: number): boolean => {
  return Number.isInteger(req) && req >= 1 && req <= 18;
};

export const validateDateTime = (req: string): boolean => {
  const dateTimeRegex =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(([+-])(\d{2}):(\d{2}))?$/;
  return dateTimeRegex.test(req);
};

export const validationFormat = (req: string[]): boolean => {
  console.log(req);
  const validFormat = [
    "P144",
    "P240",
    "P360",
    "P480",
    "P720",
    "P1080",
    "P1440",
    "P216",
  ];
  let valid: boolean = true;
  req.map((item) => {
    if (validFormat.includes(item)) {
      return (valid = false);
    }
  });
  return valid;
};
