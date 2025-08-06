import React from "react";
import Text from "./text";
0;
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

export const badgeVariants = cva(
  "inline-flex intems-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const BadgetextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
      none: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loadinng?: boolean;
  children?: React.ReactNode;
}

export default function Badge({
  variant,
  size,
  className,
  children,
  loadinng,
  ...props
}: BadgeProps) {
  if (loadinng) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={BadgetextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
