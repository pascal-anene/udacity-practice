/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// your code goes here

const facebookProfile = {

    // Properties of the facebookProfile object
        name: "Pascal Anene",
        friends: 3500,
        messages: ["Every day is a blessing", "Happiness is choice!","I am healing!"],

    // Methods of the facebookProfile object 
        postMessage: function(message){
            facebookProfile.messages.push(message);
        },

        // the index is the starting point for deletion, the second argument is the number of items to delete
        deleteMessage: function(index){
            facebookProfile.messages.splice(index,1);
        },

        addFriend: function(){
            // facebookProfile.friends++; achieves the same as below
            facebookProfile.friends += 1;
        },

        // what if the profile has no friends i.s friends < 0,
        // then we would only want to delete if friends is greater than 0
        removeFriend: function(){
            
            if(facebookProfile.friends > 0){
                 // facebookProfile.friends--; achieves the same as below
                facebookProfile.friends -= 1;
            }
           
        }


}





// test code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);