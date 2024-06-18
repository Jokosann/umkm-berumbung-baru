'use client';

import { Button } from '@/components/shadcn/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form';
import { Input } from '@/components/shadcn/ui/input';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="jokosann16" />
              </FormControl>
              {/* <FormDescription>Masukkan nama unik anda.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              {/* <FormDescription>*Masukkan password.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" type="submit" className="hover:bg-primary-color hover:text-white mt-4">
          Login
        </Button>
      </form>

      <p className="text-center text-xs font-medium text-black py-3">OR</p>

      <Button variant="secondary" className="w-full flex justify-center gap-4">
        <FcGoogle /> Login with Google
      </Button>
    </Form>
  );
}
