import { User } from '@/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate, formatLastLogin } from '@/lib/date.ts';

interface UserTableProps {
  data: User[] | null;
}

export const UserCards = ({ data }: UserTableProps) => {
  if (!data || data.length === 0) {
    return <p className='text-center text-gray-500'>Нет данных о пользователях</p>;
  }

  return (
    <div className='custom-scrollbar flex h-[55vh] flex-col gap-4 overflow-scroll'>
      {data.map((user) => (
        <Card key={user.id} className='rounded-xl border bg-[#122030] shadow-md'>
          <CardHeader className='rounded-t-xl bg-[#f9fafb] text-[#667085]'>
            <CardTitle className='flex items-center justify-between'>
              <span className='w-full text-xl font-semibold'>
                {user.firstName} {user.lastName}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className='w-full border-collapse pt-1 text-sm text-gray-700'>
              <tbody>
                <tr>
                  <td className='custom-card-cell-text font-bold'>ID</td>
                  <td className='custom-card-cell-text'>{user.id}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Gender</td>
                  <td className='custom-card-cell-text'>{user.gender}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Date of Birth</td>
                  <td className='custom-card-cell-text'>{formatDate(user.dateOfBirth)}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Email</td>
                  <td className='custom-card-cell-text'>{user.email}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Phone</td>
                  <td className='custom-card-cell-text'>{user.phone}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Registration Channel</td>
                  <td className='custom-card-cell-text'>{user.registrationChannel}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Verified </td>
                  <td className='custom-card-cell-text'>{user.isVerified ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Status</td>
                  <td className='custom-card-cell-text'>{user.status}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Last Login</td>
                  <td className='custom-card-cell-text'>{formatLastLogin(user.lastLogin)}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>User Role</td>
                  <td className='custom-card-cell-text'>{user.userRole}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Membership Level</td>
                  <td className='custom-card-cell-text'>{user.membershipLevel}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Preferred Language</td>
                  <td className='custom-card-cell-text'>{user.preferredLanguage}</td>
                </tr>
                <tr>
                  <td className='custom-card-cell-text font-bold'>Newsletter Subscription</td>
                  <td className='custom-card-cell-text'>
                    {user.newsletterSubscription ? 'Yes' : 'No'}
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
