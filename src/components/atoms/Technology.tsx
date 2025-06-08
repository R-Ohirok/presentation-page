import { TechnologyDetailsType } from '@/types/TechnologyDetailsType';

type Props = {
  technology: TechnologyDetailsType;
};

export default function Technology({ technology }: Props) {
  const { name, description } = technology;

  return (
    <div
      title={description}
      className="w-fit cursor-default rounded-lg border border-white bg-gradient-to-bl from-blue-800 via-purple-500 to-purple-800 px-1 py-0.5 text-[10px] shadow-sky-500 hover:shadow-lg md:text-[12px] lg:text-[14px]"
    >
      {name}
    </div>
  );
}
