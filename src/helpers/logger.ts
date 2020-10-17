/**
 * @logger
 * Functions that implements custom console
*/
export const logger = (message: string): void => {
    console.log(`
    +++++++++++++++++++++++++++++++++++++++++
    ${message}
    +++++++++++++++++++++++++++++++++++++++++
    `);
}