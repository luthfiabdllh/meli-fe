import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/", // Redirect ke halaman utama jika belum login
  },
})

export const config = {
    matcher: [
      "/((?!$|login|register|_next|favicon.ico|images|logo.svg).*)",
    ],
  }