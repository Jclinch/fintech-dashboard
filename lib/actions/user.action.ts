// //path: lendsqr-fe-test\lib\actions\user.action.ts
// 'use server'

// export const login = async () => {
//     try {
//         //some actions here | mutation, db, make fetch
//     } catch (error) {
//         console.error('Error', error);
//     }
// }


// export const signUp = async (userData: SignUpParams) => {
//     try {
//         //create/import mock user account
//     } catch (error) {
//         console.error('Error', error);
//     }
// }


//===

import { signUp as signUpApi, login as loginApi } from "@/lib/api";

export const signUp = async (userData: any) => {
  try {
    const result = await signUpApi(userData);
    if (result.status === "success") {
      return result.user;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const login = async (userData: any) => {
  try {
    const result = await loginApi(userData);
    if (result.status === "success") {
      return result.user;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
