type ICustomerLogoProps = {
  src: string;
  alt: string;
};

const CustomerLogo = (props: ICustomerLogoProps) => (
  <img className="opacity-10" src={props.src} alt={props.alt} />
);

export { CustomerLogo };
