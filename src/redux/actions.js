const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: { text: post.text, id: post.id }
    }
}

// const userLogin = (user) => {
//     return {
//         type: "user",
//         payload: { isLoggedIn: user.isLoggedIn, data: user.data }
//     }
// }
export { addPost }