export const validatedResult = (val: string | number | boolean | undefined)=> {
    if (val === undefined) {
        throw new Error("The value was undefined");
    } else {
        return val
    }
}