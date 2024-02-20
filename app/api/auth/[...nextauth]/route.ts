import NextAuth, { NextAuthResult } from "next-auth"
import { options } from './options';

const handler: NextAuthResult = NextAuth(options);

export { handler as GET, handler as POST }