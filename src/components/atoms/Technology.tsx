import { TechnologyDetailsType } from '@/types/TechnologyDetailsType';

type Props = {
  technology: TechnologyDetailsType;
};

export default function Technology({ technology }: Props) {
  const { name, description } = technology;

  return (
    <div
      title={description}
      className="cursor-default text-[10px] md:text-[12px] lg:text-[14px] w-fit px-1 py-0.5 border border-white rounded-lg bg-gradient-to-bl from-blue-800 via-purple-500 to-purple-800 hover:shadow-lg shadow-sky-500"
    >
      {name}
    </div>
  );
}
