import { useTranslation } from 'next-i18next';

import { Section } from '../layout/Section';

const DescriptionNotebooks = () => {
  const { t } = useTranslation('common');

  return (
    <Section
      title={t('descriptionNotebooksTitle')}
      description={t('descriptionNotebooksDescription')}
      // eslint-disable-next-line react/no-children-prop
      children={undefined}
    />
  );
};

export { DescriptionNotebooks };
