const useDevEnv = process.env.NODE_ENV === "production";

export const server = !useDevEnv
	? "http://localhost:3000/api"
	: "https://jsonplaceholder.typicode.com";
