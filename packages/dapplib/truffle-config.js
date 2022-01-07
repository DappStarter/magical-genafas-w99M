require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth outside punch gesture credit fresh gesture'; 
let testAccounts = [
"0xe49bcbe4513145df363a3e023632cb1462f7895d4fafde81f93b50b6dcb28627",
"0xa691ea15d824a38ec9e6bcdbbd4aa23fa3f86437c7041506e01ac432ad6fa701",
"0x565d2a299c213ea1913a9f4dd37a2a027fe5f2c4d44f5e7f755d28b6348d4577",
"0xb001a214fe741961cb82601d489d3474ade62bb6801a8fe82b3054d175d956b5",
"0x2841bb610803235c9fdc3052e1f316296a4abfdc51896302f62b8f1b9ddf5eaa",
"0x95c284d44b177e83c23cd492c27af2308d49c40b562022723172171f0d731fff",
"0xedbff94aa9eb46579958d65d45443d63618559f1a53214ca0fae04053cce2471",
"0x89a13438fa7dd388b717f84c2e4b6fc89fa72987acbdb20e1e36f6b692faa75a",
"0x917b1b480f486732d8df7a9d2f7fd32c4f9baa1adc9cc5beff3164b3ec229081",
"0x2483e59d637676d83cac83f9ffd461ab71d5139213c2a2d54799ba08918ba42b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

