import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  NEXT_AUTH_SECRET,
} from '@/common/constant/env';
import { loginWithGoogle } from '@/common/libs/db/services';
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
    async jwt({ user, token }) {
      if (user) {
        const dataUser = await loginWithGoogle(user);

        return {
          ...token,
          id: dataUser.id,
          is_admin: dataUser.isAdmin,
        };
      }

      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          is_admin: token.is_admin,
        },
      };
    },
  },
};
