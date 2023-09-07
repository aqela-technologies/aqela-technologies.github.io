import { twMerge } from "tailwind-merge";

export default function OutlinedButton({
  children,
  variant = "filled",
  disabled = false,
  type,
  className,
}: {
  children: string;
  className?: string;
  variant?: "filled" | "transparent";
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        `${
          variant === "filled" ? "bg-primaryPurple" : "bg-transparent"
        } px-10 py-3 font-visby text-base font-bold leading-7 text-primaryWhite md:px-14 md:py-[18px] md:text-xl ${
          variant === "filled" ? "border-0" : "border-[1px] border-primaryWhite"
        }`,
        className,
      )}
    >
      {children}
    </button>
  );
}
