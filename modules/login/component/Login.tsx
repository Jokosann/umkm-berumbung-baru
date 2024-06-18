'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { useForm } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';
import { toast } from '@/components/shadcn/ui/use-toast';

export default function Login() {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(data: any) {
    toast({
      variant: 'default',
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950">
          <code className="text-black">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="jokosann16" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem className="mt-2 mb-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
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
