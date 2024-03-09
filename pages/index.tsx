import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const Home: NextPage<{ seo: ICommon['seo'] }> = () => {
  // Ceci est à supprimer
  const seo = {
    metaTitle: 'QR Generator | Scan Me',
    metaDescription: 'Best QR Generator, QR Scanner',
  };
  return (
    <main>
      <Seo seo={seo} />
      <Title title={'Enter your text'} typeOfInput={'text'} />
    </main>
  );
};

export default Home;
