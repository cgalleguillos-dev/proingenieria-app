import {ExecutorView} from '@/components'
import {NextPage} from 'next'
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {headers} from "next/headers";
import {verifySession} from "@/lib";

const fetchDailyReportsByExecutor = async () => {
  const res = await fetch('http://localhost:3000/api/dailyreport/byuser',
    {
          cache: 'no-cache',
          headers: headers()
        }
  );
  return await res.json();
}

interface Props {
}

const Page: NextPage<Props> = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!verifySession(session, 'Ejecutor')) {
    return <div>Acceso denegado</div>;
  }

  const dailyReports = await fetchDailyReportsByExecutor()
  return <ExecutorView
    dailyReports={dailyReports}
  />

}

export default Page