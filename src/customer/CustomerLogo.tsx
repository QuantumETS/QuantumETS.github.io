type ICustomerLogoProps = {
  src: string;
  alt: string;
  className: string;
};

const CustomerLogo = (props: ICustomerLogoProps) => (
  <img src={props.src} alt={props.alt} className={props.className} />
);

export { CustomerLogo };
