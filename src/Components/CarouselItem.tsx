interface carouselItemProps {
  image: any;
  heading: string;
  detail: string;
}
const CarouselItem = ({ image, heading, detail }: carouselItemProps) => {
  return (
    <div className="item">
      {image}
      <h3>{heading}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default CarouselItem;
