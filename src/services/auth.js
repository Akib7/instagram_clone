import { auth, provider } from "../firebase";

// export const signInWithGoogle = async () => {
//   let user;

//   await auth
//     .signInWithPopup(provider)
//     .then((res) => {
//       console.log(res.user);

//       user = res.user;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });

//   return user;
// };

// export const signInWithGoogle = async () => {
//   let user;

//   await signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result.user);

//       user = result.user;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return user;
// };

export const logout = async () => {
  let logoutSuccess;

  await auth
    .signOut()
    .then(() => {
      logoutSuccess = true;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return logoutSuccess;
};
