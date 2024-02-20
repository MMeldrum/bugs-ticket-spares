// export { auth as default } from "./auth";

// Without a defined matcher, this one line applies next-auth to the entire project
export { default } from 'next-auth/middleware'

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/doc/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ['/extra', '/dashboard'] }

// Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
