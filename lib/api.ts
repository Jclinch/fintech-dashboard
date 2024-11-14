// import axios from 'axios';

// // Define types for user data and response structure
// interface UserData {
//   email: string;
//   password: string;
// }

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface ApiResponse {
//   status: string;
//   message?: string;
//   user?: User;
// }

// // Mock API URLs
// const API_SIGNUP_URL = 'https://run.mocky.io/v3/0a610d81-8c85-4b08-80ea-c7b2d309a399';
// const API_LOGIN_URL = 'https://run.mocky.io/v3/010279ba-f352-44ed-b0dd-0312f91b9907';

// // Sign-up function using POST request
// export const signUp = async (userData: UserData): Promise<ApiResponse> => {
//   try {
//     const response = await axios.post<ApiResponse>(API_SIGNUP_URL, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during sign-up:', error);
//     return { status: 'error', message: 'Sign-up failed' };
//   }
// };

// // Login function using fetch
// export const login = async (email: string, password: string): Promise<ApiResponse> => {
//   try {
//     const response = await fetch(API_LOGIN_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (data.status === 'success') {
//       return { status: 'success', user: data.user };
//     } else {
//       return { status: 'error', message: data.message };
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     return { status: 'error', message: 'Login failed' };
//   }
// };


//-----


import axios from 'axios';

interface UserData {
  email: string;
  password: string;
  // Add other fields if needed
}

interface User {
  id: string;
  name: string;
  email: string;
  // Add other fields as necessary
}

interface ApiResponse {
  status: string;
  message?: string;
  user?: User; // Replace `any` with a user type if available
}

const API_SIGNUP_URL = 'https://run.mocky.io/v3/0a610d81-8c85-4b08-80ea-c7b2d309a399';
const API_LOGIN_URL = 'https://run.mocky.io/v3/010279ba-f352-44ed-b0dd-0312f91b9907';

export const signUp = async (userData: UserData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_SIGNUP_URL}/sign-up`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during sign-up:', error);
    return { status: 'error', message: 'Sign-up failed' };
  }
};

export const login = async (userData: UserData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_LOGIN_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    return { status: 'error', message: 'Login failed' };
  }
};

// export const login = async (email: string, password: string) => {
//   try {
//     const response = await fetch('https://run.mocky.io/v3/010279ba-f352-44ed-b0dd-0312f91b9907', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (data.status === 'success') {
//       // Save token or user data here
//       console.log('User logged in:', data.data);
//     } else {
//       console.error('Login failed:', data.message);
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//   }
// };

