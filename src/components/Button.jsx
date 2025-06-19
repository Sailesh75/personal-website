/**
 * Button.jsx
 * ----------
 * Reusable button component with support for different visual variants.
 * Use it across the site for actions like navigation, linking to GitHub, viewing projects, or contact actions.
 */

const Button = ({ children, onClick, className = '', variant = 'primary', href, download, target = '_self', rel = '' }) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryClasses = "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
  const secondaryClasses = "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500";
  const outlineClasses = "text-blue-600 bg-transparent border-blue-600 hover:bg-blue-50 focus:ring-blue-500";

  const variantClasses = {
    primary: primaryClasses,
    secondary: secondaryClasses,
    outline: outlineClasses,
  }[variant] || primaryClasses;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
