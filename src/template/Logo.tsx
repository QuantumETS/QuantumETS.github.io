import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '60' : '60';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div className={`flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/Logo.svg"
        alt="QuantumETS logo"
        style={{
          height: `${size}px`,
          marginRight: '5px',
        }}
      />

      {AppConfig.site_name}
    </div>
  );
};

export { Logo };
