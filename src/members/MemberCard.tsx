type ITestimonialCardProps = {
  image: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    position: string;
  };
};

const TestimonialCard = (props: ITestimonialCardProps) => (
  <div className="p-6">
    <div className="flex items-center">
      <img
        className="h-16 w-16 rounded-full bg-primary-400"
        src={props.image.src}
        alt={props.image.alt}
      />

      <div className="ml-2">
        <div className="font-bold text-gray-900">{props.author.name}</div>
        <div className="font-medium text-gray-700">{props.author.position}</div>
      </div>
    </div>
  </div>
);

export { TestimonialCard };
