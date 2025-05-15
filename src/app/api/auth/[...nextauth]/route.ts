import NextAuth from "next-auth";
import { authOptions } from "../auth";

// Jangan ekspor authOptions di sini
// Export hanya handler NextAuth sebagai GET dan POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };