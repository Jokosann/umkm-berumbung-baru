import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  NEXT_AUTH_SECRET,
} from '@/common/constant/env';
import { loginWithGoogle } from '@/common/libs/db/services';
import { UserLogin } from '@/common/types/user-login';
import { User } from '@prisma/client';
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
      if (account?.provider === 'google') {
        const data: UserLogin = {
          email: user.email!,
          name: user.name!,
          image: user.image!,
        };

        await loginWithGoogle(data, (result: { status: boolean; data: User }) => {
          if (result.status) {
            token.id = result.data.id;
            token.name = result.data.name;
            token.email = result.data.email;
            token.image = result.data.image;
          }
        });
      }

      return token;
    },

    async session({ session, token }: any) {
      if ('id' in token) {
        session.user.id = token.id;
      }

      return session;
    },
  },
};
