// compile code will go here
const path = require('path')
const fs = require('fs')
const solc = require('solc')

// we are specifying the path to our file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
// we are reading the file
const source = fs.readFileSync(inboxPath, 'utf8')
//  we are giving our source code to solidity compiler and specifying
// how many contracts we are going to compile
const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Inbox.sol'
  ].Inbox;
