/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
        const [rest1, rest2] = await Promise.all([promise1, promise2]);
        return rest1 + rest2;
    } catch (error) {
        console.log(error);
        throw error;
    }
    // try {
    //     return promise1.then((val1) => promise2.then((val2) => val1 + val2));
    // } catch (error) {
    //     console.log(error);
    //     throw error;
    // }

    // try {
    //     return await promise1 + await promise2;
    // } catch (error) {
    //     console.log(error);
    //     throw error;
    // }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */