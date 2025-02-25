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
  const UserInfoRow = ({ label, value }: { label: string; value: string | number }) => (
    <tr>
      <td className='custom-card-cell-text font-bold'>{label}</td>
      <td className='custom-card-cell-text'>{value}</td>
    </tr>
  );

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
                <UserInfoRow label='ID' value={user.id} />
                <UserInfoRow label='Gender' value={user.gender} />
                <UserInfoRow label='Date of Birth' value={formatDate(user.dateOfBirth)} />
                <UserInfoRow label='Email' value={user.email} />
                <UserInfoRow label='Phone' value={user.phone} />
                <UserInfoRow label='Registration Channel' value={user.registrationChannel} />
                <UserInfoRow label='Verified' value={user.isVerified ? 'Yes' : 'No'} />
                <UserInfoRow label='Status' value={user.status} />
                <UserInfoRow label='Last Login' value={formatLastLogin(user.lastLogin)} />
                <UserInfoRow label='User Role' value={user.userRole} />
                <UserInfoRow label='Membership Level' value={user.membershipLevel} />
                <UserInfoRow label='Preferred Language' value={user.preferredLanguage} />
                <UserInfoRow
                  label='Newsletter Subscription'
                  value={user.newsletterSubscription ? 'Yes' : 'No'}
                />
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
