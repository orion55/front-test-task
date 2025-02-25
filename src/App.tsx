import { RegistrationForm } from '@/components/RegistrationForm';
import { Toaster } from '@/components/ui/sonner.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { UserList } from '@/components/UserList';

export function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='m-4 flex flex-col items-center justify-start gap-8 bg-background'>
        <RegistrationForm />
        <UserList />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
