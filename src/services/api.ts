
const API_URL = 'https://randomuser.me/api/';

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/?results=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const fetchUsersByEmail = async (email: string) => {
  const response = await fetch(`${API_URL}/?email=${email}`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}