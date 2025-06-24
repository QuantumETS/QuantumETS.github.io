type ICustomerLogoProps = {
  src: string;
  alt: string;
  className: string;
};

const CustomerLogo = (props: ICustomerLogoProps) => (
  <img src={props.src} alt={props.alt} className={props.className} />
);

// TODO : Add more props with predefined sizes and name them PartenairePhoton, PartenaireElectron, PartenaireProton, PartenaireNeutron

export { CustomerLogo };
