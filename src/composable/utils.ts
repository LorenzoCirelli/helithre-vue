export const validatedResult = (val: string | number | boolean | undefined | Event | EventTarget | null | HTMLFormControlsCollection) => {
  if (val === undefined) {
    throw new Error("The value was undefined");
  } else if (val === null) {
    throw new Error("The value was null");
  } else {
    return val;
  }
};
