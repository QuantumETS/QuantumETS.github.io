import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '55' : '44';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div className={`flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/logo.png"
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
