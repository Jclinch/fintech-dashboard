// import axios from 'axios';


// const API_SIGNUP_URL = 'https://run.mocky.io/v3/0a610d81-8c85-4b08-80ea-c7b2d309a399'; // Replace with the actual URL from Mocky
// const API_LOGIN_URL = 'https://run.mocky.io/v3/00dff770-9058-4424-a14a-4a4d730e07ec'; // Replace with the actual URL from Mocky

// export const signUp = async (userData: any) => {
//   try {
//     const response = await axios.post(`${API_SIGNUP_URL}/sign-up`, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during sign-up:', error);
//     return { status: 'error', message: 'Sign-up failed' };
//   }
// };

// export const login = async (userData: any) => {
//   try {
//     const response = await axios.post(`${API_LOGIN_URL}/login`, userData);
//     return response.data;
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
const API_LOGIN_URL = 'https://run.mocky.io/v3/00dff770-9058-4424-a14a-4a4d730e07ec';

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
