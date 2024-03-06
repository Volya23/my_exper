const fs = require ('fs').promises;

module.exports.createPublic = async (path) => {
    await fs.mkdir(path, {recursive: true});
};