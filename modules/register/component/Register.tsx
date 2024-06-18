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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/shadcn/ui/use-toast';

const usernameValidation = new RegExp(/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$/);
const passwordValidation = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/);

const formSchema = z.object({
  username: z
    .string()
    .min(6, { message: '*Minimal memiliki 6 karakter' })
    .max(12, { message: '*Maximal memiliki 12 karakter' })
    .regex(usernameValidation, {
      message: '*Tidak boleh ada spesial karakter, huruf besar dan spasi',
    }),
  password: z
    .string()
    .min(6, { message: '*Minimal memiliki 6 karakter' })
    .max(12, { message: '*Maximal memiliki 12 karakter' })
    .regex(passwordValidation, {
      message: '*Minimal memiliki 1 angka',
    }),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
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
            <FormItem className="mb-4">
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
            <FormItem className="mb-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" type="submit" className="hover:bg-primary-color hover:text-white">
          Buat Akun
        </Button>
      </form>
    </Form>
  );
}
