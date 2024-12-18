import Link from "next/link"

export const ArticleLink = ({href, children, date}) => {
    return (
      <Link
          className="flex flex-col space-y-1 mb-4"
          href={href}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-52 tabular-nums">
            { new Date(date).toLocaleDateString(
              "en-US", 
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {children}
          </p>
        </div>
      </Link>
    );
}