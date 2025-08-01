import React from "react";
import Text from "./text";0
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex intems-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
     },
     size:{
        sm:"py-0.5 px-2"
     }
    },
    defaultVariants: {
      variant: "primary",
      size:"sm"
    }
  });

  export const BadgetextVariants = cva("", {
    variants: {
      variant: {
        primary: "text-green-dark",
        secondary: "text-pink-dark",
      }, 
    },
    defaultVariants: {
      variant: "primary",
    }
  }
  )
interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export default function Badge({ variant, size, className, children, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={BadgetextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
