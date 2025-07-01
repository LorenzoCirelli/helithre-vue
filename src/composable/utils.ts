export const validatedResult = (val: any) => {
  if (val === undefined) {
    throw new Error("The value was undefined");
  } else if (val === null) {
    throw new Error("The value was null");
  } else {
    return val;
  }
};
