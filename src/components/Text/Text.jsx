export const Text = ({
  size = "default",
  type = "main",
  inactive = false,
  children,
  className,
  id,
}) => {
  const classes = [
    "text",
    `text_type_${type}-${size}`,
    inactive ? "text_color_inactive" : undefined,
    className,
  ]
    .filter((el) => el)
    .join(" ");
  return (
    <p className={classes} id={id}>
      {children}
    </p>
  );
};
