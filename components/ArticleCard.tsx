import { Article } from "@/app/interfaces";
import { format } from "date-fns";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

type Props = {
  data: Article[];
  baseSlug: string;
  tableName: string;
  className?: string;
};

async function ArticleCard({ data, baseSlug, tableName, className }: Props) {
  const supabase = createClient();

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  const user = sessionData.session?.user;
  const userId = user?.id;

  return (
    <>
      {data.map((article) => (
        <Link
          key={article.id}
          className={cn("group", className)}
          href={{
            pathname: `${process.env.BASE_URL}/${baseSlug}/${tableName}/${article.slug}`,
          }}
        >
          <article className="flex h-full flex-col gap-4 rounded-base border-base border-darkGray bg-black p-5 drop-shadow-base transition-all group-hover:scale-[0.99] group-hover:border-accent motion-reduce:transition-none">
            <h2 className="line-clamp-2 font-heading text-step1">
              {article.title}
            </h2>
            <div className="space-y-1">
              <div className="flex place-items-center gap-2">
                <div className="relative size-6">
                  <Image
                    src={article.author_id?.avatar_url}
                    alt={article.author_id?.full_name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
                    className="aspect-square rounded-full object-cover"
                  />
                </div>
                <p>{article.author_id?.full_name}</p>
              </div>
              <p>{format(new Date(article.created_at), "yyyy-MM-dd")}</p>
              <p>{format(new Date(article.created_at), "p")}</p>
            </div>
            <hr className="border-darkGray" />
            <p className="line-clamp-5">{article.content}</p>
            <MdOutlineArrowOutward className="mt-auto size-5 transition-[transform_colors] group-hover:translate-x-2 group-hover:text-accent" />
          </article>
        </Link>
      ))}
    </>
  );
}

export default ArticleCard;
