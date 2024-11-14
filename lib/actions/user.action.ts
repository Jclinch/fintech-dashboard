import { signUp as signUpApi, login as loginApi } from "@/lib/api";

interface UserData {
  email: string;
  password: string;
}

export const signUp = async (userData: UserData) => {
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

export const login = async (userData: UserData) => {
  try {
    const result = await loginApi(userData);
    if (result.status === "success") {
      return result.user;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Login Error:", error);
        throw error;
  }
};



//'''''''''''''''''''''''

// import { signUp as signUpApi, login as loginApi } from "@/lib/api";

// interface UserData {
//   email: string;
//   password: string;
// }

// // Sign-up function to handle response from API
// export const signUp = async (userData: UserData) => {
//   try {
//     const result = await signUpApi(userData);
//     if (result.status === "success") {
//       return result.user; // Return user data if successful
//     } else {
//       throw new Error(result.message); // Throw error if failed
//     }
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//     throw error; // Propagate error
//   }
// };

// // Login function to handle response from API
// export const login = async (userData: UserData) => {
//   try {
//     const result = await loginApi(userData.email, userData.password); // Pass email and password to API
//     if (result.status === "success") {
//       return result.user; // Return user data if successful
//     } else {
//       throw new Error(result.message); // Throw error if failed
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     throw error; // Propagate error
//   }
// };
