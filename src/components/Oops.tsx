import { FallbackProps } from "react-error-boundary";

import Button from "./Button";

export type Props = FallbackProps;
const Oops = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div className="grid h-[85vh] place-content-center bg-gray-beige-100">
      <div className="w-full 500:max-w-[450px] text-center p-2">
        <img
          src="/sad.svg"
          alt="A sad face and mood"
          className="w-1/2 lg:w-full mx-auto mb-1"
        />
        <p className="mb-2 text-sm font-semibold">{(error as Error).message}</p>
        <p className="mb-9 text-sm 500:text-base text-red-800">
          Oops! Something went wrong. Please try refreshing the page, or click
          the button below.
        </p>
        <Button
          size="md"
          variant="primary"
          onClick={resetErrorBoundary}
          extraClass="h-fit"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default Oops;
