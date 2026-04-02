export type User = {
  username: string;
  password: string;
  role: "user" | "mentor" | "admin" | "meneger";
};

export type Product = {
  id: number;
  name: string;
  price: number;
  outhor: string;
};

export type Dept = {
  id: string;
  user: string;
  electricCode: string;
  depstAmount: number;
};

export const users: User[] = [
  { username: "user1", password: "123", role: "user" },
  { username: "mentor1", password: "123", role: "mentor" },
  { username: "admin1", password: "123", role: "admin" },
  { username: "meneger1", password: "123", role: "meneger" },
];

export const products: Product[] = [
  { id: 1, name: "ASUS", price: 1200, outhor: "Kilina" },
  { id: 2, name: "Phone", price: 800, outhor: "Luka" },
  { id: 3, name: "Tablet", price: 600, outhor: "Denny" },
  { id: 4, name: "Airpod", price: 6300, outhor: "Ziyatay" },
];

export const electricDepts: Dept[] = [
  { id: "id-1a2b", user: "Alice", electricCode: "E1001", depstAmount: 250 },
  { id: "id-9f4x", user: "Bob", electricCode: "E1002", depstAmount: 430 },
  { id: "id-7g8k", user: "Charlie", electricCode: "E1003", depstAmount: 120 },
  { id: "id-5d2q", user: "David", electricCode: "E1004", depstAmount: 600 },
  { id: "id-8r1p", user: "Eve", electricCode: "E1005", depstAmount: 310 },
  { id: "id-6z9w", user: "Ima", electricCode: "E1006", depstAmount: 230 },
  { id: "id-3h5t", user: "Keni", electricCode: "E1007", depstAmount: 854 },
  { id: "id-4x7m", user: "Luka", electricCode: "E1008", depstAmount: 154 },
];
