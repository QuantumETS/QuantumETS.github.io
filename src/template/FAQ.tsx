import { useTranslation } from 'next-i18next';

import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => {
  const { t } = useTranslation('common');

  return (
    <Section
      title={t('faqTitle')}
      subtitle={t('faqSubtitle')}
      description={t('faqDescription')}
    >
      <div className="flex flex-col">
        <QuestionAnswer question={t('faqQuestion1')}>
          <p>{t('faqAnswer1')}</p>
        </QuestionAnswer>
        <QuestionAnswer question={t('faqQuestion2')}>
          <p>{t('faqAnswer2')}</p>
        </QuestionAnswer>
        <QuestionAnswer question={t('faqQuestion3')}>
          <p>{t('faqAnswer3')}</p>
        </QuestionAnswer>
        <QuestionAnswer question={t('faqQuestion4')}>
          <p>{t('faqAnswer4')}</p>
        </QuestionAnswer>
        {/* Add more QuestionAnswer components as needed */}
      </div>
    </Section>
  );
};

export { FAQ };
