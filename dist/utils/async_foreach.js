module.exports = async function (array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
//# sourceMappingURL=async_foreach.js.map