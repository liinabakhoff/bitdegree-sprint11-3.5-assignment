"use strict";

const callMePromise = firstName => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!firstName) reject(new Error('no first name passed in!'));
      
            const fullName = `${firstName} Smith`;
      
            return resolve(fullName);
          }, 1000);
    });
}

callMePromise("Ben").then((resolveMessage) => {
    console.log(resolveMessage);
}).catch((rejectMessage) => {
    console.log(rejectMessage);
});