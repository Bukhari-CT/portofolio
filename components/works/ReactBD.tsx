import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface Props {
  experiance?: any;
}

const ReactBD = ({ experiance }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {experiance?.title}
        <span className="text-textDarkBlue tracking-wide">
          {experiance?.company && "@"}
          {experiance?.company}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {experiance?.timePeriod}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {experiance?.responsibilites?.map((responsibility: string) => (
          <li
            key={experiance.id}
            className="text-base flex gap-2 text-textDark"
          >
            <span className="text-textDarkBlue mt-1">
              <TiArrowForward />
            </span>
            {responsibility}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ReactBD;
