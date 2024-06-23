import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  NEXT_AUTH_SECRET,
} from '@/common/constant/env';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ account, user, token }) {
      console.log({ account, user, token });
      if (account?.provider === 'google') {
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }: any) {
      console.log({ session, token });

      if ('email' in token) {
        session.user.email = token.email;
      }

      return session;
    },
  },
};
