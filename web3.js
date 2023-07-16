const { getFilesFromPath } = require('files-from-path')
const { Web3Storage } = require('web3.storage')

async function addToWeb3 ({ endpoint, token, pathToAdd, name, wrapWithDirectory = false, includeHidden }) {
  const web3 = new Web3Storage({ endpoint, token })
  const files = await getFilesFromPath(pathToAdd, { hidden: includeHidden })
