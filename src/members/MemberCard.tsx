type ITestimonialCardProps = {
  image: {
    src: string | 'avatar1' | 'avatar2' | 'avatar3';
    alt: string;
  };
  author: {
    name: string;
    position?: string;
  };
};

const getAvatarSrc = (src: string) => {
  switch (src) {
    case 'avatar1':
      return '/assets/images/avatar1.png';
    case 'avatar2':
      return '/assets/images/avatar2.png';
    case 'avatar3':
      return '/assets/images/avatar3.png';
    default:
      return src;
  }
};

const TestimonialCard = (props: ITestimonialCardProps) => (
  <div className="p-6">
    <div className="flex items-center">
      <img
        className="h-28 w-28 rounded-full bg-primary-400"
        src={getAvatarSrc(props.image.src)}
        alt={props.image.alt}
      />

      <div className="ml-6 text-lg">
        <div className="font-bold text-gray-900">{props.author.name}</div>
        <div className="font-medium text-gray-700">
          {props.author.position ?? 'Membre'}
        </div>
      </div>
    </div>
  </div>
);

export { TestimonialCard };
