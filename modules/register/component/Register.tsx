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

export default function Register() {
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
              <FormDescription>*Masukkan nama yang unik.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>*Masukkan password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" type="submit" className="hover:bg-primary-color hover:text-white mt-4">
          Buat Akun
        </Button>
      </form>
    </Form>
  );
}
