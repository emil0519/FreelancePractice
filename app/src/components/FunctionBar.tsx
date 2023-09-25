import type { IHeaderTypes } from "../types/type";

const FunctionBar = ({ headerInfo }: { headerInfo: IHeaderTypes[] }) => {
  return (
    <div className="text-white flex flex-wrap">
      {headerInfo.map((item) => (
        <div
          key={item.text}
          onClick={() => item.customFunction && item.customFunction()}
          className="min-w-[120px] w-fit min-h-[30px] flex border-white border-solid border-[0.5px] border-spacing-5 cursor-pointer justify-center align-center"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default FunctionBar;
