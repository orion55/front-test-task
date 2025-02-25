import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useCountries } from './useCountries.ts';
import { useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea.tsx';

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Длина должна составлять не менее 2-х символов' })
    .max(50, { message: 'Длина должна составлять не более 50 символов' }),
  country: z.string(),
  description: z.string(),
});

export const RegistrationForm = () => {
  const { data, loading, error } = useCountries();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      country: '',
      description: '',
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      form.reset({
        country: data[0]?.name,
      });
    }
  }, [data, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Данные были отправлены', {
      description: (
        <pre className='mt-2 w-full overflow-auto'>
          <code className='text-black'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
      position: 'top-right',
    });
  }

  return (
    <div className='font-feature-default mobile:w-full tablet:w-[400px] flex w-[400px] flex-col justify-center font-inter antialiased animate-in fade-in zoom-in'>
      <h1 className='mb-8 text-center text-[28px] font-bold'>Регистрация</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Имя'
                    {...field}
                    className='input-autofill h-[36px] rounded-xl border border-white/20 bg-[#080F17] px-3 py-2 text-[#D6DDE6] placeholder:text-[15px] placeholder:font-medium placeholder:leading-4 placeholder:text-[#D6DDE666]/[.4] hover:bg-[#1B2229]'
                  />
                </FormControl>
                <FormMessage className={'text-red-500'} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='h-[36px] rounded-xl border border-white/20 bg-[#080F17] px-3 py-2 text-[#D6DDE6] placeholder:text-[15px] placeholder:font-medium placeholder:leading-4 placeholder:text-[#D6DDE666]/[.4] hover:bg-[#1B2229]'>
                      <SelectValue placeholder='Выберите страну' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='rounded-md bg-[#080F17]'>
                    {loading ? (
                      <SelectItem className='text-gray-500' value='none'>
                        Загрузка...
                      </SelectItem>
                    ) : data && data.length > 0 ? (
                      data.map((item) => (
                        <SelectItem key={item.id} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem className='text-gray-500' value='none'>
                        Нет доступных стран
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                {error && <p className='text-sm font-medium text-red-500'>{error}</p>}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Коротко о себе'
                    className='h-[36px] max-h-[116px] min-h-[36px] resize-none overflow-hidden rounded-xl border border-white/20 bg-[#080F17] px-4 py-2 text-[15px] text-[#D6DDE6] transition-all duration-300 placeholder:text-[15px] placeholder:font-medium placeholder:leading-4 placeholder:text-[#D6DDE666]/[.4] hover:bg-[#1B2229] focus:min-h-[116px]'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='h-[36px] w-full max-w-full rounded-[12px] bg-[#A7EE43] py-2 text-[15px] font-semibold leading-5 text-black transition-all delay-150 duration-100 hover:bg-[#C8FF7B]'
          >
            Продолжить
          </Button>
        </form>
      </Form>
    </div>
  );
};
