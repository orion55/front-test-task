import { RegistrationForm } from '@/components/RegistrationForm';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/lib/theme-provider';
import { UserList } from '@/components/UserList';

export function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className='m-4 flex flex-col items-center gap-8 bg-background'>
        <RegistrationForm />
        <UserList />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
