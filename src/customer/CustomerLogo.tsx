type ICustomerLogoProps = {
  src: string;
  alt: string;
  className?: string;
  tier: 'photon' | 'electron' | 'proton' | 'neutron';
  link: string;
};

const CustomerLogo = (props: ICustomerLogoProps) => {
  let classHeight = '';

  switch (props.tier) {
    case 'photon':
      classHeight = 'h-16';
      break;
    case 'electron':
      classHeight = 'h-24';
      break;
    case 'proton':
      classHeight = 'h-32';
      break;
    case 'neutron':
      classHeight = 'h-40';
      break;
    default:
      classHeight = 'h-32';
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <a href={props.link}>
        <img
          src={props.src}
          alt={props.alt}
          style={{ margin: 'auto' }}
          className={`${props.className} ${classHeight}`}
        />
      </a>
      <label>Partenaire {props.tier}</label>
    </div>
  );
};

export { CustomerLogo };
