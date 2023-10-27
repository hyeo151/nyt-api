"use client";

const Articles = ({ articles }) => {
  return (
    <ul className="grid grid-cols-2 gap-5">
      {articles.map((article) => {
        return (
          <li key={article._id} className="bg-slate-300 py-4 px-6 rounded">
            <a href={article.web_url}>
              <h3 className="text-lg leading-6 tracking-tight mb-4 font-bold text-black/90">
                {article.headline.main}
              </h3>
              <div className="overflow-hidden max-w-[380px] max-h-[250px]">
                {article.multimedia.length > 0 && (
                  <img
                    src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                    className="w-full hover:scale-110 transition-transform duration-200 object-cover object-center"
                    alt={`${article.headline.print_headline} article Image`}
                  />
                )}
              </div>
              <p className="text-sm font-semibold text-black/90">
                {article.byline.original}
              </p>
              <p className="text-sm font-semibold text-black/90">
                {article.pub_date}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.type_of_material}
                </p>
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.document_type}
                </p>
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.news_desk}
                </p>
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.section_name}
                </p>
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.subsection_name}
                </p>
                <p className="bg-slate-500 inline-block px-2 py-1 text-xs hover:text-black/40">
                  {article.source}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
