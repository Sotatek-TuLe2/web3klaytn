const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionByBlockNumberAndIndex API', () => {
    test('should return klay_getTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.blockHash).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data.blockHash)).toBe(true);
            done();
        };
        const blockNumber = 118593751
        const transactionIndexPosition = '0x0'

        sdk.klay.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, callbackOne);
    });
});
