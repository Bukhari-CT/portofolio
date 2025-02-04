interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg  text-textDarkBlue mr-2">
        {titleNo}.
      </span>
      <span className="font-bodyFont">{title}</span>
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
