import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Route } from '../../template/Route';

const Index = () => <Route page="contact" />;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projet'])),
    },
  };
}

export default Index;
