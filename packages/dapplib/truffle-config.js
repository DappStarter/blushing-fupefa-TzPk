require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain solid idea clinic obscure ghost'; 
let testAccounts = [
"0x1af7a31d1ccc7f08694c3e01970cc54f7729fea8510cb9366a33a74af5b50010",
"0x9dbe330a307ea7715fbaf16961ef680dca3d21c027407b2cfcc3e44645b8f18c",
"0x7ebee8d214efc07d42e125fd8e1d7a177b77ccd45d5314707ba5244ebbc499d6",
"0x895b03b2d71a33efa480e07c2c25003d98e705faea3013728495008b1424fed4",
"0x2fc6ac75d775c7dcce111bf9956b512345f222fddb2364fd08e52645c4bc6a5c",
"0x3c699be1f6e81051ca0e565db9294966183a9a36994b35694060940e2b494f6f",
"0x83ee9692df71dc367adcd1bf086de0ad0b6ee110fa0ed497b493585122ac2da8",
"0xf9f2d0ff90a96bd801fa7034ec98f9147a511ecca2d3f103bde341c6871ff136",
"0x5d4039d52a3fffc243aaeb96c3d061338ec2f1061a7a2dd52d232f066ae61c98",
"0x1d747b4879a55202e87e205f0f64717975e1fbb50e66d0c685699f922101f449"
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

